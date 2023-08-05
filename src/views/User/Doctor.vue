<script setup>
import { onMounted, ref, computed } from "vue";
import { useUser } from "@/stores/user";
import { useDoctor } from "@/stores/doctor";
import { useQueue } from "@/stores/queue";
import { useQueues } from "@/service/queue";
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const { id } = useRoute().params;
const user_store = useUser();
const doctor_store = useDoctor();
const queue_store = useQueue();
const doctor = ref();
const queue = ref();
const queues = ref([]);

const is_queue_taken = ref(false);

const router = useRouter();

const lastQueue = computed(
  () => queues.value?.map((item) => item.is_active).lastIndexOf(false) + 1
);

const cancelQueue = async () => {
  await useQueues
    .DELETE(queue.value?.id)
    .then((res) => {
      localStorage.setItem("is_queue_taken", false);
      is_queue_taken.value = false;
      toast.success("Navbat bekor qilindi", {
        autoClose: 1000,
        theme: "light",
      });
      setTimeout(async () => {
        queues.value = await queue_store.GET_QUEUE_TODAY(id);
      }, 1000);
    })
    .catch((error) => {
      console.log(error);
      toast.error("Navbat ishlamoqda!", {
        autoClose: 1000,
        theme: "light",
      });
    });
};

const takeQueue = async () => {
  localStorage.setItem("doctor_id", id);
  localStorage.setItem("is_taking_queue", true);

  const token = localStorage.getItem("token");
  if (!token) {
    router.push({ name: "ClientLogin" });
  } else {
    const user = user_store.USER;
    await useQueues
      .CREATE({ client_id: user.id, doctor_id: +id })
      .then((res) => {
        localStorage.setItem("is_queue_taken", true);
        is_queue_taken.value = true;

        toast.success("Navbat olindi", {
          autoClose: 1000,
          theme: "light",
        });

        setTimeout(async () => {
          queues.value = await queue_store.GET_QUEUE_TODAY(id);
          updateQueue();
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Navbat avval olingan!", {
          autoClose: 1000,
          theme: "light",
        });
      });

    localStorage.setItem("is_taking_queue", false);
  }
};

const updateQueue = async () => {
  const data = {
    client_id: +localStorage.getItem("client_id"),
    doctor_id: +id,
  };

  await useQueues.CHECK(data).then((res) => {
    if (res.data) {
      localStorage.setItem("is_queue_taken", true);
      queue.value = res.data;
    } else {
      localStorage.setItem("is_queue_taken", false);
    }
    is_queue_taken.value = JSON.parse(localStorage.getItem("is_queue_taken"));
  });
};

onMounted(async () => {
  doctor.value = await doctor_store.GET_ONE(id);
  queues.value = await queue_store.GET_QUEUE_TODAY(id);
  AOS.init();

  if (JSON.parse(localStorage.getItem("is_taking_queue"))) {
    takeQueue();
  }

  // if (JSON.parse(localStorage.getItem("is_queue_taken"))) {
  updateQueue();
  // }
});
</script>

<template>
  <div v-if="doctor" class="py-10">
    <div class="container mx-auto px-4 py-8 bg-zinc-800">
      <div class="grid grid-cols-2 gap-8">
        <!-- Doctor Info -->
        <div class="col-span-2 lg:col-span-1">
          <div class="bg-zinc-700 p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <img
                :src="`https://nest-clinic.onrender.com/api/${doctor.image_name}`"
                onerror="this.src='/doctor.png'"
                class="h-16 w-16 rounded-full"
                alt=""
              />
              <div class="ml-4">
                <h2 class="text-xl font-semibold text-white">
                  {{ doctor.first_name }} {{ doctor.last_name }}
                </h2>
                <p class="text-gray-400">
                  {{ doctor.profession }}, Tajriba: {{ doctor.experience }}
                </p>
              </div>
            </div>

            <div class="">
              <!-- Other Doctor Details -->
              <div class="text-gray-400">
                <p>{{ doctor.work_time }}</p>
                <p>{{ doctor.work_day.split(",").join(", ") }}</p>
                <p>{{ `Qavat ${doctor.floor}, Xona ${doctor.room}` }}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-zinc-700 p-6 rounded-lg shadow-md flex flex-col justify-between sm:flex-row gap-10 col-span-2 lg:col-span-1"
        >
          <div class="text-gray-400">
            <p>Mijozlar soni: {{ queues.length }}</p>
            <p>
              Hozir:
              {{ queues?.indexOf(queues?.find((item) => item.is_active)) + 1 }}
            </p>
            <p>
              {{
                `${
                  lastQueue
                    ? `${lastQueue}-mijoz: ${Math.ceil(
                        (new Date(queues[lastQueue - 1].finished_at).getTime() -
                          new Date(
                            queues[lastQueue - 1].started_at
                          ).getTime()) /
                          1000
                      )} daqiqa`
                    : ""
                }`
              }}
            </p>
          </div>

          <div v-if="is_queue_taken">
            <div class="text-gray-400">
              <p>Service: {{ doctor.service.name }}</p>
              <p>Shifokor: {{ doctor.first_name + " " + doctor.last_name }}</p>
              <p>Qavat: {{ doctor.floor }}</p>
              <p>Xona: {{ doctor.room }}</p>
              <p>
                Navbat:
                {{ queues.map((item) => item.id).indexOf(queue?.id) + 1 }}
              </p>
              <p>
                Bemor:
                {{ queue?.client.first_name + " " + queue?.client.last_name }}
              </p>

              <p class="text-gray-400 mt-2">
                {{
                  `${String(new Date(queue?.createdAt).getHours()).padStart(
                    2,
                    "0"
                  )}:${String(new Date(queue?.createdAt).getMinutes()).padStart(
                    2,
                    "0"
                  )}`
                }}
              </p>
            </div>

            <button
              @click="cancelQueue"
              class="bg-red-600 hover:bg-red-800 mt-5 text-white px-4 py-2 rounded-lg transition duration-200 h-min"
            >
              Bekor qilish
            </button>
          </div>

          <div v-else>
            <button
              @click="takeQueue"
              class="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition duration-200 h-min"
            >
              Navbat olish
            </button>
          </div>
        </div>
      </div>

      <!-- Queues -->
      <div class="mt-8">
        <h2 class="text-2xl font-semibold mb-4 text-white">Navbat</h2>
        <ul class="space-y-4">
          <li
            v-for="(item, index) in queues"
            :key="item.id"
            :class="` ${
              queues?.indexOf(queues?.find((item) => item.is_active)) == index
                ? 'bg-green-700'
                : 'bg-zinc-700'
            } p-4 rounded-lg shadow-md relative flex items-center justify-between ${
              queues?.map((item) => item.id).lastIndexOf(queue?.id) == index
                ? 'border'
                : 'border-none'
            }`"
          >
            <div class="flex items-center justify-between w-full">
              <div class="flex gap-5 items-center">
                <p class="text-gray-400">{{ index + 1 }}</p>

                <p class="text-gray-400">
                  {{
                    `${String(new Date(item?.createdAt).getHours()).padStart(
                      2,
                      "0"
                    )}:${String(
                      new Date(item?.createdAt).getMinutes()
                    ).padStart(2, "0")}`
                  }}
                </p>

                <p class="text-gray-400">
                  {{ `${item?.client.first_name} ${item?.client.last_name}` }}
                </p>
              </div>

              <!-- Queue Status -->
              <div v-if="!item?.is_active" class="text-green-500">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>

              <div v-else></div>
            </div>

            <div
              :class="`absolute bg-red-500 px-2 py-1 right-3 rounded-lg text-[7px] sm:text-xs text-white ${
                queues?.map((item) => item.id).lastIndexOf(queue?.id) == index
                  ? 'block'
                  : 'hidden'
              }`"
            >
              Sizning navbat
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else class="w-full py-20 flex items-center justify-center">
    <Loading />
  </div>
</template>

<style scoped></style>

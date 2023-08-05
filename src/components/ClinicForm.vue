<script setup>
import { onMounted } from "vue";

const { clinicModal, clinic, clinicFunc, resetFormClinic, isAdd } = defineProps(
  ["clinicModal", "clinic", "clinicFunc", "resetFormClinic", "isAdd"]
);

const onChange = (e) => {
  clinic.image = e.target.files[0];
  clinic.imageURL = URL.createObjectURL(e.target.files[0]);
};

onMounted(() => {});
</script>

<template>
  <!-- ADD QUESTION MODAL -->
  <div
    class="absolute w-full h-screen bg-black/70 left-0 flex items-center justify-center z-50 duration-300"
    :class="clinicModal ? 'top-0' : '-top-full'"
  >
    <div class="relative w-full max-w-3xl max-h-full">
      <!-- Modal content -->
      <div
        class="relative bg-white rounded-lg shadow dark:bg-zinc-900 border border-zinc-800"
      >
        <button
          @click="resetFormClinic"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-zinc-700 dark:hover:text-white"
        >
          <i class="bx bx-x text-2xl px-1"></i>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            {{ isAdd ? "Yangi shifoxona qo'shish" : "Shifoxonani yangilash" }}
          </h3>
          <form class="flex gap-5 mb-5">
            <div class="w-[40%]">
              <label
                for="image"
                class="flex items-center justify-center h-56 w-56 bg-zinc-950 mx-auto cursor-pointer border rounded-full p-2 border-zinc-700"
              >
                <img
                  v-if="clinic?.data?.image_name && !clinic.imageURL"
                  :src="`https://nest-clinic.onrender.com/api/image/${clinic.data.image_name}`"
                  class="object-cover h-full w-full rounded-full"
                />
                <img
                  v-else-if="clinic.imageURL"
                  :src="clinic.imageURL"
                  class="object-cover h-full w-full rounded-full"
                />
                <i v-else class="text-7xl text-white bx bx-upload"></i>
              </label>
              <input
                @change="onChange"
                ref="upload"
                type="file"
                accept="image/*"
                id="image"
                class="hidden"
                required=""
              />
              <h3 class="text-xs text-center mt-5 font-medium text-red-500">
                Xajmi: 1MB dan oshmasin
                <br />
                Turi: .JPG, .PNG, .JPEG
              </h3>
            </div>
            <div class="w-[60%] space-y-5">
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300 dark:bg-blue-500/20 bg-blue-300 rounded-md text-center p-1"
                >
                  Nomi
                </label>
                <input
                  type="text"
                  id="full_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                  placeholder="Shoxmed"
                  required
                  v-model="clinic.data.name"
                />
              </div>
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300 dark:bg-blue-500/20 bg-blue-300 rounded-md text-center p-1"
                >
                  Telefon raqami
                </label>
                <input
                  type="string"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                  placeholder="887038006"
                  required
                  v-model="clinic.data.phone"
                />
              </div>
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300 dark:bg-blue-500/20 bg-blue-300 rounded-md text-center p-1"
                >
                  Mazili
                </label>
                <input
                  type="text"
                  id="address"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                  placeholder="Chilonzor 12-daha"
                  required
                  v-model="clinic.data.address"
                />
              </div>
            </div>
          </form>

          <div class="flex items-center justify-between">
            <button
              type="reset"
              class="w-40 text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-800"
              @click="resetFormClinic"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              class="w-40 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
              @click="clinicFunc"
            >
              {{ isAdd ? "Qo'shish" : "Saqlash" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

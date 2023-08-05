import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";
import { useClinics } from "../service/clinic";

export const useClinic = defineStore("clinic", () => {
  const store = reactive({
    data: [
      {
        id: 4,
        name: "Shoxmed",
        address: "Chilonzor",
        phone: "+998991234567",
        image_name: null,
        service: [
          {
            id: 4,
            name: "Logoped1",
            price: "$200",
            diagnosis: [
              {
                id: 2,
                name: "Tish og`rig`i",
              },
            ],
          },
          {
            id: 5,
            name: "1Xirurg",
            price: "$400",
            diagnosis: [],
          },
          {
            id: 6,
            name: "Stomotologiya",
            price: "$50",
            diagnosis: [],
          },
          {
            id: 7,
            name: "Lor",
            price: "20000",
            diagnosis: [],
          },
        ],
        doctor: [
          {
            id: 5,
            first_name: "John",
            last_name: "Doe",
            phone: "+998991234569",
            profession: "Dentist",
            experience: "6+ years",
            work_time: "8:00-12:00",
            work_day: "Monday,Tuesday,Friday",
            floor: "4",
            room: "17-a",
            image_name: "PZD80565.png",
            service: {
              id: 4,
              name: "Logoped",
              price: "$200",
            },
            clinic: {
              id: 4,
              name: "Shoxmed",
              address: "Chilonzor",
              phone: "+998991234567",
              image_name: null,
            },
            queue: [
              {
                id: 4,
                is_active: true,
                started_at: null,
                finished_at: null,
                image_name: null,
                createdAt: "2023-08-04T10:14:48.924Z",
              },
              {
                id: 5,
                is_active: true,
                started_at: null,
                finished_at: null,
                image_name: null,
                createdAt: "2023-08-04T10:14:49.573Z",
              },
              {
                id: 6,
                is_active: true,
                started_at: null,
                finished_at: null,
                image_name: null,
                createdAt: "2023-08-04T10:14:50.327Z",
              },
              {
                id: 7,
                is_active: true,
                started_at: null,
                finished_at: null,
                image_name: null,
                createdAt: "2023-08-04T13:34:36.801Z",
              },
              {
                id: 8,
                is_active: true,
                started_at: null,
                finished_at: null,
                image_name: null,
                createdAt: "2023-08-04T13:34:39.199Z",
              },
              {
                id: 9,
                is_active: true,
                started_at: null,
                finished_at: null,
                image_name: null,
                createdAt: "2023-08-04T13:35:17.030Z",
              },
              {
                id: 10,
                is_active: true,
                started_at: null,
                finished_at: null,
                image_name: null,
                createdAt: "2023-08-04T14:08:48.405Z",
              },
            ],
          },
        ],
      },
    ],
    load: true,
  });

  const GET_CLINIC = async () => {
    store.data = (await useClinics.GET()).data;
    store.load = false;
  };

  const GET_ONE = async (id) => {
    // return store.data.find((item) => item.id == id);
    return (await useClinics.GET_ONE(id)).data;
  };

  const ADD_CLINIC = async (data) => {
    (await useClinics.CREATE(data)).data;
    store.data.push(data);
    return GET_CLINIC();
  };

  const UPDATE_CLINIC = async (id, data) => {
    for (const i in store.data) {
      if (store.data[i].id == id) {
        (await useClinics.UPDATE(id, data)).data;
        return GET_CLINIC();
      }
    }
  };

  const DELETE_CLINIC = async (id) => {
    try {
      await useClinics.DELETE(id);
      return GET_CLINIC();
    } catch (error) {
      console.log(error);
    }
  };

  const CLINICS = computed(() => store.data);
  const LOAD = computed(() => store.load);

  return {
    CLINICS,
    LOAD,
    GET_CLINIC,
    ADD_CLINIC,
    UPDATE_CLINIC,
    GET_ONE,
    DELETE_CLINIC,
  };
});

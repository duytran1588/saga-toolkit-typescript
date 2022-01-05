import { ListParams, ListResponse, Student } from "../models";
import axiosClient from "./axiosClient";

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = "/students";
    return axiosClient.get(url, {
      params,
    });
  },

  getById(id: string): Promise<Student> {
    const url = `/student/${id}`;
    return axiosClient.get(url);
  },

  add(data: Student): Promise<Student> {
    const url = "/student";
    return axiosClient.post(url, data);
  },

  remove(id: string): Promise<Student> {
    const url = `/student/${id}`;
    return axiosClient.delete(url);
  },

  update(data: Partial<Student>): Promise<Student> {
    const url = `/student/${data.id}`;
    return axiosClient.patch(url, data);
  },
};

export default studentApi;

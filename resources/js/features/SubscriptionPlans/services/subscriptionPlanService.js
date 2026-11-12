import { axiosCLient } from "../../../lib/axios";

export const subscriptionPlanServices = {
    list: () => axiosCLient.get(`/api/admin/subscription-plans`),
    create: () => axiosCLient.get(`/api/admin/subscription-plans/create`),
    store: (data) => axiosCLient.post(`/api/admin/subscription-plans`, data),
    show: (id) => axiosCLient.get(`/api/admin/subscription-plans/${id}`),
    edit: (id) => axiosCLient.get(`/api/admin/subscription-plans/${id}/edit`),
    update: (id, data) => axiosCLient.put(`/api/admin/subscription-plans/${id}`, data),
    delete: (id) => axiosCLient.delete(`/api/admin/subscription-plans/${id}`),
}
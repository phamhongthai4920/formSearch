import axiosClient from './axiosClient'
const tableApi = {
    getAll(params) {
        const url = '/list-info'
        return axiosClient.get(url, { params })
    },
    get(id) {
        const url = `/list-info/${id}`
        return axiosClient.get(url)
    },
    add(data) {
        const url = '/list-info'
        return axiosClient.post(url, data)
    },
    update(data) {
        const url = `/list-info/${data.id}`
        return axiosClient.patch(url, data)
    },
    remove(id) {
        const url = `list-info/${id}`
        return axiosClient.delete(url)
    },
}
export default tableApi;
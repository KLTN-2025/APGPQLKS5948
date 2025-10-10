<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"><i class="bx bxs-plus-square"></i>Tạo Mới Phòng</button>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            style="display: none;" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Tạo Mới Phòng Khách Sạn</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-2">
                                            <label>Tên Phòng</label>
                                            <input v-model="phong_create.ten_phong" type="text" class="form-control mt-2">
                                        </div>
                                        <div class="mb-2">
                                            <label>Giá Mặc Định</label>
                                            <input v-model="phong_create.gia_mac_dinh" type="number"
                                                class="form-control mt-2">
                                        </div>
                                        <div class="mb-2">
                                            <label>Tình Trạng</label>
                                            <select v-model="phong_create.tinh_trang" class="form-control mt-2">
                                                <option value="1">Hoạt Động</option>
                                                <option value="0">Tạm Dừng</option>
                                            </select>
                                        </div>
                                        <div class="mb-2">
                                            <label>Số Người tối đa</label>
                                            <input v-model="phong_create.nguoi_toi_da" type="number"
                                                class="form-control mt-2">
                                        </div>
                                        <div class="mb-2">
                                            <label>Loại Phòng</label>
                                            <select v-model="phong_create.id_loai_phong" class="form-control mt-2">
                                                <template v-for="(value, index) in ds_loai_phong" :key="index">
                                                    <option v-bind:value="value.id">{{ value.ten_loai_phong }}</option>
                                                </template>
                                            </select>
                                        </div>
                                        <div class="mb-2">
                                            <label>Tiện Ích Khác</label>
                                            <textarea v-model="phong_create.tien_ich_khac" type="text"
                                                class="form-control mt-2" cols="30" rows="4"></textarea>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button v-on:click="themMoiPhong()" type="button" class="btn btn-primary"
                                        data-bs-dismiss="modal">Thêm Mới</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="card">
            <div class="card-header mt-2">
                <h4>Danh Sách Các Phòng</h4>
            </div>
            <div class="card-body ">
                <div class="table-responsive">
                    <table class="table table-bordered table-hver">
                        <thead>
                            <tr class="text-center">
                                <th>#</th>
                                <th>Tên Phòng</th>
                                <th>Giá Mặc Định</th>
                                <th>Tình Trạng</th>
                                <th>Người Tối Đa</th>
                                <th>Loại Phòng</th>
                                <th>Tiện Ích Khác</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center" v-for="(value, index) in lay_phong" :key="index">
                                <th class="align-middle">{{ index + 1 }}</th>
                                <td class="align-middle">{{ value.ten_phong }}</td>
                                <td class="align-middle">{{ value.gia_mac_dinh }}</td>
                                <td class="align-middle">{{ value.tinh_trang }}</td>
                                <td class="align-middle">{{ value.nguoi_toi_da }}</td>
                                <td class="align-middle">{{ value.id_loai_phong }}</td>
                                <td class="align-middle">{{ value.tien_ich_khac }}</td>
                                <td class="align-middle text-nowrap">
                                    <button v-on:click="Object.assign(phong_update, value)" data-bs-toggle="modal" data-bs-target="#updateModal"
                                    class=" me-1 btn btn-success">Cập Nhật</button>
                                    <button data-bs-toggle="modal" data-bs-target="#deleteModal" 
                                    v-on:click="id_can_xoa = value.id" class="btn btn-danger">Xóa Phòng</button>
                                </td>
                            </tr>
                            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Phòng</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="alert alert-danger" role="alert">
                                               Thật sự xóa phòng này?
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Đóng</button>
                                            <button v-on:click="xoaPhong()" type="button" class="btn btn-danger"
                                                data-bs-dismiss="modal">Xác Nhận Xoá</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Phòng</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="mb-2">
                                            <label>Tên Phòng</label>
                                            <input v-model="phong_update.ten_phong" type="text" class="form-control mt-2">
                                        </div>
                                        <div class="mb-2">
                                            <label>Giá Mặc Định</label>
                                            <input v-model="phong_update.gia_mac_dinh" type="number"
                                                class="form-control mt-2">
                                        </div>
                                        <div class="mb-2">
                                            <label>Tình Trạng</label>
                                            <select v-model="phong_update.tinh_trang" class="form-control mt-2">
                                                <option value="1">Hoạt Động</option>
                                                <option value="0">Tạm Dừng</option>
                                            </select>
                                        </div>
                                        <div class="mb-2">
                                            <label>Số Người tối đa</label>
                                            <input v-model="phong_update.nguoi_toi_da" type="number"
                                                class="form-control mt-2">
                                        </div>
                                        <div class="mb-2">
                                            <label>Loại Phòng</label>
                                            <select v-model="phong_update.id_loai_phong" class="form-control mt-2">
                                                <template v-for="(value, index) in ds_loai_phong" :key="index">
                                                    <option v-bind:value="value.id">{{ value.ten_loai_phong }}</option>
                                                </template>
                                            </select>
                                        </div>
                                        <div class="mb-2">
                                            <label>Tiện Ích Khác</label>
                                            <textarea v-model="phong_update.tien_ich_khac" type="text"
                                                class="form-control mt-2" cols="30" rows="4"></textarea>
                                        </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Đóng</button>
                                            <button v-on:click="capNhatPhong()" type="button" class="btn btn-danger"
                                                data-bs-dismiss="modal">Xác Nhận Cập Nhật</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            ds_loai_phong   : [],
            lay_phong       : [],
            phong_create    : {},
            phong_update    : {},
            id_can_xoa      : '',
        }
    },
    mounted() {
        this.layLoaiPhong();
        this.layPhong();
    },
    methods: {
        layLoaiPhong() {
            axios
                .get('http://127.0.0.1:8000/api/loai-phong/data')
                .then((res) => {
                    this.ds_loai_phong = res.data.loai_phong;
                })
        },
        layPhong() {
            axios
                .get('http://127.0.0.1:8000/api/phong/data')
                .then((res) => {
                    this.lay_phong = res.data.phong;
                })
        },
        themMoiPhong() {
            // console.log("Nó muốn thêm phòng", this.phong_create);
            axios
                .post('http://127.0.0.1:8000/api/phong/create', this.phong_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message);
                        this.layPhong(); // mà như ri mới đúng
                        // Cái chô ni của em là ri nè
                    }
                });
        },
        xoaPhong() {
            axios
                .delete("http://127.0.0.1:8000/api/phong/delete/" + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layPhong();
                    }
                });
        },
        capNhatPhong() {
            axios
                .put("http://127.0.0.1:8000/api/phong/update", this.phong_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layPhong();
                    }
                });
        }
    },
}
</script>
<style></style>
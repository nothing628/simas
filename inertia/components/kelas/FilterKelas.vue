<template>
    <div class="card-header flex items-center justify-between flex-wrap pb-0">
        <h4 class="mb-4 font-semibold text-lg text-dark">Daftar Kelas</h4>
        <div class="flex items-center flex-wrap">
            <div class="input-icon-start mb-4 mr-2 relative">
                <span
                    class="absolute flex items-center justify-center top-0 bottom-0 left-0 min-w-8 pointer-events-none text-gray-700 text-base">
                    <i class="ti ti-calendar"></i>
                </span>
                <input type="text" class="form-control date-range bookingrange pl-7" placeholder="Select"
                    value="Academic Year : 2024 / 2025" ref="dateRangeInput" />
            </div>
            <VDropdown placement="bottom-end" class="mb-4 mr-2">
                <a href="javascript:void(0);" class="btn btn-outline-light bg-white dropdown-toggle"
                    data-bs-toggle="dropdown" data-bs-auto-close="outside"><i class="ti ti-filter me-2"></i>Filter</a>
                <template #popper>
                    <div
                        class="block bg-white text-dark text-sm min-w-[250px] sm:min-w-[350px] max-w-full p-0 border-light-900 z-10">
                        <form>
                            <div class="flex items-center border-b border-b-light p-4">
                                <h4 class="text-dark text-base font-semibold mb-0">Filter</h4>
                            </div>
                            <div class="p-4 border-b border-b-light pb-0">
                                <div class="row">
                                    <div class="px-3 max-w-full flex-none w-full">
                                        <div class="mb-4">
                                            <label class="form-label">Class</label>
                                            <VueSelect :classes="{ 'control': 'bg-light!' }" :options="ClasSelecOne"
                                                v-model="selected" placeholder="Select" />
                                        </div>
                                    </div>
                                    <div class="px-3 max-w-full flex-none w-full">
                                        <div class="mb-4">
                                            <label class="form-label">Section</label>
                                            <VueSelect :classes="{ 'control': 'bg-light!' }" :options="ClassSece"
                                                v-model="selectedOne" placeholder="Select" />
                                        </div>
                                    </div>
                                    <div class="px-3 max-w-full flex-none w-full">
                                        <div class="mb-4">
                                            <label class="form-label">Status</label>
                                            <VueSelect :classes="{ 'control': 'bg-light!' }" :options="SeleSts"
                                                v-model="selectedTwo" placeholder="Select" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 flex items-center justify-end">
                                <a href="javascript:void(0);" class="btn btn-light me-3">Reset</a>
                                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Apply</button>
                            </div>
                        </form>
                    </div>
                </template>
            </VDropdown>
            <VDropdown placement="bottom-end" class="mb-4">
                <a href="javascript:void(0);" class="btn btn-outline-light bg-white dropdown-toggle"
                    data-bs-toggle="dropdown"><i class="ti ti-sort-ascending-2 me-2"></i>Sort by A-Z
                </a>
                <template #popper>
                    <ul class="block bg-white text-dark text-sm p-4 border-light-900 z-10">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"> Ascending </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"> Descending </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">
                                Recently Viewed
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">
                                Recently Added
                            </a>
                        </li>
                    </ul>
                </template>

            </VDropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import '../daterangepicker/daterangepicker.css';
import '../daterangepicker/daterangepicker'
import VueSelect from '../vue-select';
import { Dropdown as VDropdown } from '../floating-vue'
import { onMounted, ref } from 'vue'
import moment, { Moment } from 'moment'
import DateRangePicker from '../daterangepicker/daterangepicker'

const ClasSelecOne = ref([
    { label: "I", value: "I" },
    { label: "II", value: "II" },
    { label: "III", value: "III" },
])
const ClassSece = ref([
    { label: "Select", value: "Select" },
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
])
const SeleSts = ref([
    { label: "Select", value: "Select" },
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
])
const selected = ref<string[]>([])
const selectedOne = ref<string[]>([])
const selectedTwo = ref<string[]>([])
const dateRangeInput = ref()

const booking_range = (start: Moment, end: Moment) => {
    return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
}

onMounted(() => {
    if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
            dateRangeInput.value,
            {
                startDate: start,
                endDate: end,
                ranges: {
                    Today: [moment(), moment()],
                    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                    "Last 7 Days": [moment().subtract(6, "days"), moment()],
                    "Last 30 Days": [moment().subtract(29, "days"), moment()],
                    "This Month": [moment().startOf("month"), moment().endOf("month")],
                    "Last Month": [
                        moment().subtract(1, "month").startOf("month"),
                        moment().subtract(1, "month").endOf("month"),
                    ],
                },
            },
            booking_range
        );

        booking_range(start, end);
    }
})
</script>
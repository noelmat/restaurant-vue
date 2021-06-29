<template>
    <div class="restaurant-management">
        <h2 class="heading heading-secondary">Menu</h2>
        <div class="menu-list">
            <MenuCard
                v-for="menuId in Object.keys(menus)"
                :key="menuId"
                :menu="menus[menuId]"
                @delete-menu="deleteMenuClicked"
            />
            <div class="message loading-message" v-if="loading">
                Loading Menus ...
            </div>
            <div class="message empty-message" v-if="Object.keys(menus).length === 0 && !loading">
                No Menus Found. Get started by adding a new Menu
            </div>
        </div>
        <ModalComponent v-if="addNewMenu">
            <AddEditMenu
                @save-menu="saveMenu"
                @cancel="cancelAdd"
                title="Create Menu"
            />
        </ModalComponent>
    <ModalComponent v-if="showDeleteConfirm">
        <ConfirmBox
            :message="`Are you sure you want to delete ${menuToDelete.name} menu?`"
            @confirm="confirmDelete"
            buttonText="Delete Menu"
            @cancel="cancelDelete"/>
        </ModalComponent>
        <AddButton @btn-click="addMenu" />
    </div>
</template>
<script>
import { getMenus, postMenu, deleteMenu } from "@/services/admin/menus.js";
import MenuCard from "./MenuCard";
import AddEditMenu from "./MenuView/AddEditMenu.vue";
import store from "@/store";

export default {
    name: "RestaurantManagement",
    title: 'Menu Management',
    components: {
        MenuCard,
        AddEditMenu,
    },
    data() {
        return {
            menus: {},
            addNewMenu: false,
            menuToDelete: {},
            showDeleteConfirm: false,
            loading: false
        };
    },
    created() {
        this.loading = true;
        getMenus()
        .then((menus) => {
            menus.forEach((menu) => {
                this.$set(this.menus, menu._id, menu);
            });
            this.loading = false;
        })
        .catch((err) => {
            this.loading = false;
            this.$toast.error(`${err.message} while loading menus`)
        });
    },
    beforeRouteEnter(to, from, next) {
        if (store.state.authentication.role === "admin") {
            next();
        } else {
            next({ name: from.name });
        }
    },
    methods: {
        addMenu() {
            this.addNewMenu = true;
        },
        cancelAdd() {
            this.addNewMenu = false;
        },
        saveMenu(event) {
            postMenu(event)
                .then((menu) => {
                    this.$set(this.menus, menu._id, menu);
                    this.cancelAdd();
                    this.$toast.success(`${event.name} Menu Added`);
                })
                .catch((err) => {
                    this.$toast.error(`${err.message} while adding Menu`);
                });
        },
        deleteMenuClicked(event) {
            this.showDeleteConfirm = true;
            this.menuToDelete = event;
        },
        cancelDelete() {
            this.showDeleteConfirm = false;
            this.menuToDelete = {};
        },
        confirmDelete() {
        deleteMenu(this.menuToDelete._id)
            .then(() => {
                this.showDeleteConfirm = false;
                this.$toast.success(`${this.menuToDelete.name} deleted`);
                this.$delete(this.menus, this.menuToDelete._id);
                this.menuToDelete = {};
            })
            .catch((err) => {
                this.$toast.error(`${err.message} while adding Menu`);
            });
        },
    },
};
</script>
<style scoped>
.restaurant-management {
    margin: 0.5em 1em 0 2em;
    min-height: 100vh;
}
@media (min-width: 900px) {
    .restaurant-management {
        margin: 2em 3em 0 4.5em;
    }
}
.heading {
    margin-left: 5px;
    margin-bottom: 1.6em;
}
.menu-list {
    display: flex;
    flex-wrap: wrap;
}
.add-btn {
    position: fixed;
    right: 30px;
    bottom: 30px;
    background-color: #fff;
    padding: 0.8em 0.9em;
    border-radius: 100%;
    font-size: 1.3em;
    box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.add-btn:hover,
.add-btn:active {
    color: #000;
}
.message{
    padding: 1em;
    width: 100%;
    border-radius: 3px;
}
.empty-message {
    border: 1px solid #673ab7;
    color: #673ab7;
}
.loading-message{
    border: 1px solid #673ab7;
    color: #673ab7;
}
</style>
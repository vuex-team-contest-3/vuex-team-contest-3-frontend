<template>
    <header class="bg-[#323232]">
        <Container>
            <nav class="w-full flex items-center justify-between py-5">
                <div>
                    <a href="#" class="flex items-center">
                        <h1 class="text-[24px] w-[100px] text-[#DEDEDE] font-bold">Logo</h1>
                    </a>
                </div>
                <div class="hidden lg:block">
                    <ul class="flex items-center gap-8 text-[16px] text-white font-bold">
                        <li class="hidden p-2 text-[#DEDEDE] hover:text-white">
                            <a href="#home">Shifokorlar</a>
                        </li>
                        <li class="hidden p-2 text-[#DEDEDE] hover:text-white">
                            <a href="#social">Xizmatlar</a>
                        </li>
                        <li class="hidden p-2 text-[#DEDEDE] hover:text-white">
                            <a href="#project">Narxlar</a>
                        </li>
                        <li :class="lamp ? 'hidden' : ''">
                            <button class="text-white p-2 duration-200 rounded-lg hover:text-[#bbbbbb]">
                                <router-link to="/login">Kirish</router-link>
                            </button>
                        </li>
                        <li :class="lamp ? 'hidden' : ''">
                            <button
                                class="text-white duration-200 border-white border-2 p-2 rounded-lg hover:border-[#bbbbbb] hover:text-[#bbbbbb]">
                                <router-link to="/registration">Ro'yxatdan o'tish</router-link>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="lg:hidden reletive">
                    <button @click="toggleMenu" class="flex p-1 rounded-lg focus:ring-2 focus:ring-[#3B3B98]">
                        <i class='text-[24px] text-white font-bold' :class="menu ? 'bx bx-x' : 'bx bx-menu'"></i>
                    </button>
                    <ul class="absolute bg-[#A7C5BD] w-[60%] sm:w-[40%] h-[100vh] right-0 top-[76px] text-white font-bold text-[18px]"
                        :class="menu ? 'bloc' : 'hidden'">
                        <li class="mb-5 mt-5 pl-5" :class="lamp ? 'hidden' : ''">
                            <button
                                class="bg-white text-[#3B3B98] border-2 border-white p-2 rounded-lg hover:border-[#3B3B98]">
                                <router-link to="/login">Log in</router-link>
                            </button>
                        </li>
                        <li class="mb-5 pl-5" :class="lamp ? 'hidden' : ''">
                            <button class="bg-[#3B3B98] border-2 border-[#3B3B98] p-2 rounded-lg hover:border-white">
                                <router-link to="/registration">Registration</router-link>
                            </button>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <a href="#home" @click="closeMenu">Home</a>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <a href="#social" @click="closeMenu">Socials</a>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <a href="#project" @click="closeMenu">Projects</a>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <a href="#price" @click="closeMenu">Prices</a>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white">
                            <a href="#staff" @click="closeMenu">Staffs</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Container>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
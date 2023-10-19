<script setup>

</script>

<template>
    <header class="header">
        <div class="search">
            <img class="s" src="../assets/img/search.svg" />
            <input class="bar font" id="search" placeholder="Поиск">
        </div>
    </header>
    <div space></div>
    <div>
        123
    </div>
</template>

<style scoped>
.header {}

.search {
    margin: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 3rem;
    display: flex;
    border-color: transparent;
    border-radius: 2rem;
    background-color: lightgrey;
    font-size: 1.2rem;

}

.bar:focus {
    outline: none !important;
}

.logo {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    align-self: flex-end;
    padding-left: 7rem;
}

.s {
    height: 100%;
    padding: .5rem;

}

.bar {
    width: 100%;
    height: 100%;
    border-color: transparent;
    background-color: transparent;

}
</style>
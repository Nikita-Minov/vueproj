<script setup>
  //import {parseNews} from "@/utils/parser";

  //let res;
  // const showInfo = async () => {
  //   res = await parseNews();
  //   return res;
  // }

 // import fetch from "node-fetch";
  import axios from 'axios';
  import * as cheerio from "cheerio";

  const fetchData = async () => {
    const res = await axios.get('http://cchgeu.ru/search/?q=12&how=r');

    //const text = await res.text();

    const $ = cheerio.load(res);

    const resArr = [];

    let value, link, name, date;
    let dateIndex = 0;

    $('div.search-page > p').each(function(id, desc) {
      value = $(desc).text().replaceAll('\n', ' ');
      resArr.push({value});
    });

    $('div.search-page > small').each((id, dateArr) => {
      if($(dateArr).text().includes('Изменен')) {
        date = $(dateArr).text().replace('Изменен: ', '');
        resArr[dateIndex].date = date;
        dateIndex++;
      }
    });

    $('div.search-page > a').each((id, artName) => {
      link = 'https://cchgeu.ru' + $(artName).attr('href');
      name = $(artName).text();

      resArr[id].link = link;
      resArr[id].name = name;
    });
    resArr.length = resArr.length - 1;

    alert(resArr);

    return resArr;
  }


</script>

<template>
    <div class="root">
        <div class="top">
            <img class="logo" src="../assets/img/logo.svg" />
        </div>
        <div class="search">
            <img class="s" src="../assets/img/search.svg" />
            <input @keydown.enter="fetchData" class="bar font" placeholder="Поиск">
        </div>

        <div v-for="item of res">
          <div>
            {{item}}
          </div>
      </div>
        <div class="bot" />
    </div>
</template>

<style>
.root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.top {
    display: flex;
    width: 100%;
    height: 30rem;
}

.bot {
    width: 100%;
    height: 100%;
}

.search {
    margin-left: auto;
    margin-right: auto;
    width: 60%;
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
import * as cheerio from 'cheerio';
import axios from "axios";
import fetch from 'node-fetch';

export const parseNews = async () => {
	const res = await fetch('http://cchgeu.ru/search/?q=12&how=r', );

	const text = await res.text();

	const $ = cheerio.load(text);

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

	return resArr;
}
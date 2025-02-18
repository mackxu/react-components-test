import dayjs from "dayjs";

const now = dayjs(Date.now());

// 本月天数
console.log(now.daysInMonth());

// 本月第一天
const start = now.startOf("M");
console.log(start.format("YYYY-MM-DD"));

// 本月最后一天
console.log(start.endOf("M").format("YYYY-MM-DD"));

// 本月第一天是星期几
console.log(start.day());

console.log(start.month());

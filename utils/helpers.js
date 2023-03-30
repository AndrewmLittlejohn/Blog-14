module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
};


// Bootcamp Main/UR-VIRT-FSF-PT-10-2022-U-LOLC/14-MVC/01-Activities/19-Ins_Middleware/utils/helpers.js
import moment from "moment";
export const getDailyChats = (arr = []) => {
  let sorted = [...arr].sort((a, b) => moment(a.createdAt).diff(b.createdAt));

  let res = [];
  sorted.forEach(v => {
    let day = moment(v.createdAt).format('DD/MM/YYYY');
    let dayFound = res.some(elem => elem.date === day);
    if (dayFound) {
      let temp = res.map((value, i) =>
        value.date === day ? { ...value, data: [...value.data, v] } : value,
      );
      res = temp;

    } else {
      res.push({ date: day, data: [v] });
    }
  });
  return res.sort((a, b) => moment(a.date).diff(b.date))
}


export const getName = (address, contacts) => {
  const cons = contacts.filter(cc => cc.contactAddress.toLowerCase() === address)
  if (cons.length > 0) {
    return cons[0].contactName
  }
  return ''
}
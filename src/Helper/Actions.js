export const Save = (task) => {
  let list = [];
  if (localStorage.getItem('ListTaskNames')) {
    list = localStorage.getItem('ListTaskNames').split(',');
  }

  if (task) {
    list.push(task.toLowerCase());
    localStorage.setItem('ListTaskNames', [...new Set(list)].sort().toString());
    window.dispatchEvent(new Event('storage_load_all'));
    return true;
  }
  return false;
}

export const Load = () => {
  if (localStorage.getItem("ListTaskNames")) {
    return localStorage.getItem("ListTaskNames").split(",");
  } else {
    return [];
  }
};


export const Delete = (index) => {
  let list = [];
  if (localStorage.getItem("ListTaskNames")) {
    list = localStorage.getItem("ListTaskNames").split(",");
  }
  list.splice(index, 1);
  localStorage.setItem("ListTaskNames", [...new Set(list)].sort().toString());
};

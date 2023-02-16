export const Save = (task) => {
  let list = [];
  if (localStorage.getItem('ListTaskNames')) {
    list = localStorage.getItem('ListTaskNames').split(',');
  }

  if (task) {
    list.push(task.toLowerCase());
    localStorage.setItem('ListTaskNames', [...new Set(list)].sort().toString());
    window.dispatchEvent(new Event('storage_load_all'));

    showNotification("New", "New task added");
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

export const notificationPermission = () => {
  Notification.requestPermission((result) => {
    if (result === "denied") {
      console.log("Notification permission denied");
      return;
    }
    if (result === "default") {
      console.log("Notification permission dismissed");
      return;
    }
  });
}

export const showNotification = (title, message) => {
  notificationPermission();

  if (!('serviceWorker' in navigator)) { 
    new Notification(title, { body: message, icon: "logo512.png" });
    return; 
  }
  
  if (!('PushManager' in window)) { 
    new Notification(title, { body: message, icon: "logo512.png" });
    return; 
  }

  new Notification(title, { body: message, icon: "logo512.png" });
}

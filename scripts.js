Notification.requestPermission().then(function(result) {
    if (result === 'granted') {
      console.log('Notification permission granted.');
    }
  });
  
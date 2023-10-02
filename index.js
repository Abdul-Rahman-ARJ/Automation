// Define a function to simulate clicking 'Connect' buttons
function clickConnectButtons() {
  const connectButtons = document.querySelectorAll('.button-secondary-small');
  
  for (const button of connectButtons) {
    button.click();
    setTimeout(() => {
      console.log("Clicked a 'Connect' button");
    }, 2000); // Delay before clicking the next button
  }
}

// Call the function to start clicking buttons
clickConnectButtons();


export default clickConnectButtons

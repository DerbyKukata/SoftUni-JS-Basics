function dvorove(input) {
   let kvm = Number(input[0]) 
   let total = kvm * 7.61
   let discount = total * 0.18
   let wprice = total - discount


  console.log(`The final price is: ${wprice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
dvorove(["550"]);

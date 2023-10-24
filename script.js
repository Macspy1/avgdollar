
















// This method gets all the information entered by the user into the form and prints it in the modal pop-up
            // You do not need to change anything in the method
            function printInfo() {
                var elements = $("#myForm").serializeArray();
                var content = "<br>";

                var payperhour = elements[0].value;
                var hoursperday = elements[1].value;
                var daysaweek = elements[2].value;
                var interest = elements[3].value;
                var howmanyyears = elements[4].value;
                var hrsw = hoursperday*daysaweek;
                var num5=0;
                var mpay = 4*(payperhour*hrsw);
                var ypay = mpay*12;
                var yearlyinterestadded =0;
	              var ypayandinterest = ypay;
                var ypayandinteresttotal = 0;

                //years = 5
                //ypayandinterest = 25 000
              // yearlyinterestadded = 25 000 * 0.1
              // num5 =0
              // num5 += 2500
              //ypayandinterest = 25000 + (2500) = 27500
              // ypayandinteresttotal += 27500
	            for(var i =0; i < howmanyyears; i++) {
		 yearlyinterestadded = (ypayandinterest)*interest;
     console.log("");
     console.log("    i= " + i);
     console.log("    ypay= " + ypay);
     console.log("    interest= " + interest);
     console.log("    ypayandinterestbefore= " + ypayandinterest);
     console.log("    yearlyinterestadded = ypayandinterst * interest " + yearlyinterestadded);
         num5 += yearlyinterestadded;
         
	ypayandinterest = (ypayandinterest+(yearlyinterestadded));
  console.log("    ypayandinterest= " + ypayandinterest);
 // console.log("");
  //total money

    
    console.log("ypayandinteresttotal: "+ ypayandinteresttotal);
    console.log("");
  }
ypayandinteresttotal= ypay*howmanyyears +num5;

        
            roundToTwo(payperhour);
            roundToTwo(hoursperday);
            roundToTwo(daysaweek);
            roundToTwo(howmanyyears);
            roundToTwo(num5);
            roundToTwo(mpay);
            roundToTwo(ypay);
            roundToTwo(yearlyinterestadded);
            roundToTwo(ypayandinterest);

          

                $("#modal-title").text("Your form has been submitted!");
                for (var i = 0; i < elements.length; i++) {
                    content = 
                    "<br> <br> Gets payed " + new Intl.NumberFormat().format(roundToTwo(payperhour))+" $/h, " 
                    + "<br> <br>" +roundToTwo(hoursperday)+" hours of work per day, " 
                    + "<br> <br>" +roundToTwo(daysaweek)+" days a week " 
                    + "<br> <br>" +"Monthly pay: " + new Intl.NumberFormat().format(roundToTwo(mpay)) +"$" 
                    + "<br> <br>" +"Yearly pay: "+ new Intl.NumberFormat().format(roundToTwo(ypay)) +"$" +" that is "+ numberToString(roundToTwo(ypay)) + " dollars per year"
                    + "<br> <br>" +"Money added from Interest per year: "+ new Intl.NumberFormat().format(yearlyinterestadded) +"$" 
                    
                }
                   if(howmanyyears == 1){content += "<br> <br>" +"Money in the account because of interest after " + howmanyyears +" year: "+ new Intl.NumberFormat().format(roundToTwo(ypayandinteresttotal))+"$" +" that is "+ numberToString(Math.round(ypayandinteresttotal))+ " dollars"
                   console.log(ypayandinteresttotal);
                   content += "<br> <br>" +"Money in the account from just interest after " + howmanyyears +" year: "+ new Intl.NumberFormat().format(roundToTwo(num5))+"$"+" that is "+ numberToString(Math.round(num5))+ " dollars"
                   console.log(num5);
                }
                else{content += "<br> <br>" +"Money in the account because of interest after " + howmanyyears +" years: "+ new Intl.NumberFormat().format(roundToTwo(ypayandinteresttotal)) +"$" +" that is "+ numberToString(Math.round(ypayandinteresttotal))+ " dollars"
                console.log(ypayandinteresttotal);
                content += "<br> <br>" +"Money in the account from just interest after " + howmanyyears +" years: "+ new Intl.NumberFormat().format(roundToTwo(num5))+"$" +" that is "+ numberToString(Math.round((num5))) + " dollars"
                console.log(num5);
            }
                document.getElementById("content").innerHTML = " " + content;
            }


            function roundToTwo(payperhour) {
                return +(Math.round(payperhour + "e+2")  + "e-2");
            }

/*
            function numberToString(number) {
                const numberWords = [
                  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
                ];
              
                const tensWords = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
              
                if (number < 20) {
                  return numberWords[number];
                } else if (number < 100) {
                  return tensWords[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + numberWords[number % 10] : '');
                } else {
                  return 'Number out of range';
                }
              }*/


              function numberToString(number) {
                const numberWords = [
                  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
                ];
              
                const tensWords = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
              
                const scaleNames = ['', 'thousand', 'million', 'billion', 'trillion'];
              
                if (number === 0) {
                  return numberWords[0];
                }
              
                let result = '';
              
                for (let i = 0; number > 0; i++) {
                  const chunk = number % 1000;
              
                  if (chunk !== 0) {
                    const chunkString = convertChunkToWords(chunk, numberWords, tensWords);
                    result = chunkString + (i === 0 ? '' : ' ' + scaleNames[i]) + (result ? ' ' + result : '');
                  }
              
                  number = Math.floor(number / 1000);
                }
              
                return result;
              }
              
              function convertChunkToWords(chunk, numberWords, tensWords) {
                let result = '';
              
                if (chunk >= 100) {
                  result += numberWords[Math.floor(chunk / 100)] + ' hundred';
                  chunk %= 100;
              
                  if (chunk !== 0) {
                    result += ' ';
                  }
                }
              
                if (chunk < 20) {
                  result += numberWords[chunk];
                } else {
                  result += tensWords[Math.floor(chunk / 10)];
                  const ones = chunk % 10;
              
                  if (ones !== 0) {
                    result += ' ' + numberWords[ones];
                  }
                }
              
                return result;
              }
              
              // Example usage:
              let myNumber = 1234567890123;
              let myString = numberToString(myNumber);
              
              console.log(myString); // Output: "one trillion two hundred thirty four billion five hundred sixty seven million eight hundred ninety thousand one hundred twenty three"
              
              
             

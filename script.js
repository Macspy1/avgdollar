
















// This method gets all the information entered by the user into the form and prints it in the modal pop-up
            // You do not need to change anything in the method
            function printInfo() {
                var elements = $("#myForm").serializeArray();
                var content = "<br>";

                var num = elements[0].value;
                var num1 = elements[1].value;
                var num2 = elements[2].value;
                var num3 = elements[3].value;
                var num4 = elements[4].value;
                var hrsw = num1*num2;

                var mpay = 4*(num*hrsw);
                var ypay = mpay*12;
                var yearlyinterestadded =0;
	              var ypayandinterest = ypay;
                var ypayandinteresttotal = 0;


	            for(var i =0; i < num4; i++) {
		 yearlyinterestadded = (ypayandinterest /100)*num3;
	ypayandinterest = (ypay+(yearlyinterestadded*num4));
    ypayandinteresttotal+= ypayandinterest;}


        
            roundToTwo(num);
            roundToTwo(num1);
            roundToTwo(num2);
            roundToTwo(num4);
            roundToTwo(mpay);
            roundToTwo(ypay);
            roundToTwo(yearlyinterestadded);
            roundToTwo(ypayandinterest);

                $("#modal-title").text("Your form has been submitted!");
                for (var i = 0; i < elements.length; i++) {
                    content = 
                    "<br> <br> Gets payed " + roundToTwo(num)+" $/h, " 
                    + "<br> <br>" +roundToTwo(num1)+" hours of work per day, " 
                    + "<br> <br>" +roundToTwo(num2)+" days a week " 
                    + "<br> <br>" +"Monthly pay: " + roundToTwo(mpay) +"$" 
                    + "<br> <br>" +"Yearly pay: "+ roundToTwo(ypay) +"$" 
                    + "<br> <br>" +"Money added from Interest per year: "+ roundToTwo(yearlyinterestadded) +"$" 
                    + "<br> <br>" +"Money in the account because of interest after " + num4 +" years: "+roundToTwo(ypayandinteresttotal) +"$"
                }
                document.getElementById("content").innerHTML = " " + content;
            }


            function roundToTwo(num) {
                return +(Math.round(num + "e+2")  + "e-2");
            }

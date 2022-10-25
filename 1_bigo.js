//*=================== TIME COMPLEXITY (Big O notation) =================
//? omega-notation, Theta-notation O-notation
/*
* Rules to simlify the our Big-0 notation
*Drop Constants
                    ? o(n^2) " even if it realy n * n * n ..."
                    ? O(n)  " even if it realy n +n +n ..."
* Different Terms for Inputs
                    ? ex O(a+b)
                    ? ex O(a*b)
* Drop Non-Dominants
                    ? ex : O(n^2 + n), we drop the non dominant term "n" and stay with O(n^2)
* O(1) : (constant time event) if is O(2) or more, we reduce to constant time no matter the number of operation, we reduce to 'O(1)'
* O(log n) : (divide to conquer)
* O(n) : (Proportional)
*0(n^2) : loop within a loop
* O(nlog n) : some sorting algorithms


exemples : 
            let myArray = [11,3,45,7];
            myArray.push(17);                0(1)
            myArray.shift(17);               0(n)
            myArray.splice(1,0,'hi');       0(n)
            myArray.splice(1,0,'hi');       0(n)

* Wrap Up
        

*/

//*=================== SPACE COMPLEXITY ( notation) =================


//*=================== ARRAYS =================



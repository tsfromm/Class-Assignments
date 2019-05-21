import java.util.Collections;
import java.util.Scanner;

public class May21TitusLab {
    public static void main(String[] args) {
            // scanner reads input from the command line through various methods
            Scanner scanner = new Scanner(System.in);
            char answer;
         do {
            // prompt and read a string
            System.out.print("Enter your name: ");
            String username = scanner.next();

            // prompt and read an int
            System.out.print("Enter your age: ");
            int age = scanner.nextInt();

            System.out.println(String.format("Hello %s, your age is %d", username, age));

            if (age >= 16) {
                System.out.println("You are old enough to drive.");
            } else {
                System.out.println("You are NOT old enough to drive.");
            }
            if (age >= 18) {
                System.out.println("You are old enough to vote.");
            } else {
                System.out.println("You are NOT old enough to vote.");
            }
            if (age >= 21) {
                System.out.println("You are old enough to be drink.");
            } else {
                System.out.println("You are NOT old enough to drink.");
            }
            if (age >= 35) {
                System.out.println("You are old enough to join be President.");
            } else {
                System.out.println("You are NOT old enough to be President.");
            }
            if (age >= 55) {
                System.out.println("You are old enough to join AARP.");
            } else {
                System.out.println("You are NOT old enough to join AARP.");
            }
            if (age >= 67) {
                System.out.println("You are old enough to start drawing Social Security.");
            } else {
                System.out.println("You are NOT old enough to start drawing Social Security.");
            }

            System.out.print("enter 'E', 'U', or 'S' for employment status - employed, unemployed, or student: ");
            char empStatus = scanner.next().toUpperCase().charAt(0);

            switch (empStatus) {
                case 'E':
                    System.out.println("You are employed.");
                    break;
                case 'U':
                    System.out.println("You are unemployed.");
                    break;
                case 'S':
                    System.out.println("You are a student.");
                    break;
                default:
                    throw new IllegalStateException("Invalid Input");
            }

            System.out.print(" Do you have a car, truck, suv, or do not own a vehicle? Enter C, T, S, or N: ");
            char vehicle = scanner.next().toUpperCase().charAt(0);
            switch (vehicle) {
                case 'C':
                    System.out.println("You own a car.");
                    break;
                case 'T':
                    System.out.println("You own a truck.");
                    break;
                case 'S':
                    System.out.println("You own an SUV.");
                    break;
                case 'N':
                    System.out.println("You do not own a vehicle.");
                    break;
            }
//            //----------------- Begin Steps 3 & 4-------------------------
//            int[] myArray = new int[30];
//            for (int i = 0; i < myArray.length; i++) {
//                myArray[i] = i;
//                System.out.println("int i " + i + "= myArray[" + myArray[i] + "]");
//            }
//            for (int item : myArray) {
//                System.out.println("Enhanced for: " + item);
//            }
//
//            for (int i = 0; i < myArray.length; i++) {
//                myArray[i] = (i + 1) * 2;
//                System.out.println(myArray[i]);
//            }
//            for (int item : myArray) {
//                System.out.println("Enhanced for: " + item);
//            }
//            for (int i = myArray.length - 1; i >= 0; i--) {
//                System.out.println(myArray[i]);
//            }
//
//            int i;
//
//            i = 0;
//            while (i < myArray.length) {
//                System.out.println(myArray[i]);
//                i++;
//            }
//            i = myArray.length - 1;
//            while (i >= 0) {
//                System.out.println(myArray[i]);
//                i--;
//            }
//            //-----------------------------------------
            System.out.print("Do you want to answer the questions again? Enter Y or N: ");
            answer = scanner.next().toUpperCase().charAt(0);
        } //do
         while(answer == 'Y');
//        stepFive(22);
        System.out.println(stepFive(22));
    } //end main method

    public static int stepFive(int b) {
        //----------------- Step 5 Part 1-------------------------
//        int[] myArray = new int[30];
//        for (int i = 0; i < myArray.length; i++) {
//            myArray[i] = i;
//            System.out.println("int i " + i + "= myArray[" + myArray[i] + "]");
//        }
//        for (int item : myArray) {
//            if(item == b) break;
//
//            if(item%2 ==0) {
//                continue;
//            }
//            else if (item%2!=0) {
//                System.out.println(item);
//            }
//        }
        //-------------------------------------------------------
        //-----------------Step 5 Part 2-------------------------
//       Now change the method signature to return an int.
//       * change the method as follows:
//          - if the number is odd, print it.
//          - if the number is even, add it to a running total of even numbers.
//          - if the number is equal to the number passed in the method, return the running total sum from the method.
        int[] myArray = new int[30];
        int sum=0;
        for (int i = 0; i < myArray.length; i++) {
            myArray[i] = i;
            System.out.println("int i " + i + "= myArray[" + myArray[i] + "]");
        }
        for (int item : myArray) {
            if (item == b) {
                //System.out.println("The total sum of even numbers is "+sum);
                break;
            }
            if (item%2!=0) {
                System.out.println(item);
            }
            else if(item%2 ==0) {
//                System.out.println(sum += item);
                //System.out.println(String.format("The previous sum %d plus the current value %d equals %d", sum, item, sum+item));
                sum+=item;
            }

        } return sum;
        //-------------------------------------------------------

} //end stepFive method
} //end class

import static java.lang.String.valueOf;

public class May20TitusLab {
    //step1
    public static void main(String[] args) {
        int firstInt = 6;
        int secondInt = 20;
        int thirdInt = 1;
        float myFloat= 4.4f;
        boolean isCold = false;
        double myDouble = 10_234.99;
        System.out.println(firstInt);
        System.out.println(secondInt);
        System.out.println(thirdInt);
        System.out.println(myFloat);
        System.out.println(isCold);
        System.out.println(myDouble);

        //step2
        int sumFirstSecond = (firstInt + secondInt);
        System.out.println(sumFirstSecond);
        int sumFirstThird = Math.addExact(firstInt, thirdInt);
        System.out.println(sumFirstThird);
        System.out.println(secondInt/firstInt);
        System.out.println(secondInt%firstInt);
        int sumFirstRem = (firstInt+(secondInt%firstInt));
        System.out.println(sumFirstRem);

        //step3
        int x = 100;
        boolean xIs100 = x == 100;
        int y = 106;
        System.out.println(x>y);
        System.out.println(y>x);
        System.out.println(x>=(y-6));
        int z = 92;
        System.out.println(x < y && y < z);
        System.out.println(y < z && x >= y);
        System.out.println(z > (y+x) || (x-y) < z);
        System.out.println((y-x) != (y+x));

        //step4
        Integer n = 64;
        System.out.println((n>>1)+" is 64 shifted right 1 bit, which is equal to 64/2.");
        System.out.println((n<<1)+" is 64 shifted left 1 bit, which is equal to 64*2.");
        Integer m = 40;
        System.out.println((m>>1)+" is 40 shifted right 1 bit, which is equal to 40/2.");
        System.out.println((m<<1)+" is 40 shifted left 1 bit, which is equal to 40*2.");
        System.out.println((m>>2)+" is 40 shifted right 1 bit, which is equal to 40/4.");
        System.out.println((m<<2)+" is 40 shifted left 1 bit, which is equal to 40*4.");
        Integer o = 45;
        System.out.println((o>>1)+" is 45 shifted right 1 bit.");
        System.out.println((o<<1)+" is 45 shifted left 1 bit.");





        anotherMethod();
        playWithStrings();
    } //end main
    public static void anotherMethod() {

        //step5
//        int n = 27;

        //step6
        Integer n = 27;
        Integer thousand = Integer.valueOf("1000");
//        int a = n/2;
        //Note: this int cannot be accessed within main method
//        if (n > 1000) {
          if ( thousand.compareTo(n) == 0) {
            System.out.println(n+" is a Big value");
//            System.out.println(a+" is half a big variable");
        } //end if
        else {
            System.out.println(n+" is not a big value");
//            System.out.println(a+" is definitely small");
        } //end else
    } //end anotherMethod

    //step7
    static void playWithStrings() {
        String Taylor = "Taylor";
        String Fromm = new String("Fromm");
        System.out.println("Hello "+Taylor.concat(" "+Fromm));
        System.out.println("Hello "+Taylor+" "+Fromm);
        String fullName = Taylor.concat(" "+Fromm);
        System.out.println("The total length of the String Taylor Fromm is "+fullName.length());
        System.out.println("The first occurrence of 'o' in the String Taylor Fromm is at position "+fullName.indexOf('o'));
        System.out.println("The character at position 7 is "+fullName.charAt(7));

        if(fullName.contains("son")) {
            System.out.println("The String Taylor Fromm contains 'son'.");
        } //end if
        else {
            System.out.println("The String Taylor Fromm does not contain 'son'.");
        } //end else

        System.out.println("The last 5 characters are "+fullName.substring(fullName.length() - 5));

        if(fullName.contains("\'") && fullName.contains("-")) {
            System.out.println("The String Taylor Fromm contains an apostrophe and a dash.");
        } //end if
        else if(fullName.contains("\'")) {
            System.out.println("The String Taylor Fromm contains an apostrophe");
        } //end else if
        else if(fullName.contains("-")) {
            System.out.println("The String Taylor Fromm contains a dash");
            } //end else if
        else {
            System.out.println("The String Taylor Fromm does not contain an apostrophe or a dash.");
        } //end else
    } //end playWithStrings
} //end class

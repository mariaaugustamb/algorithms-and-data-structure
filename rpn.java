import java.util.Scanner;
import java.util.Stack;

public class rpn {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        Stack<Double> stack = new Stack<Double>();

        while (in.hasNext()) {
            String exp = in.nextLine();
            Double temp1 = 0.0;
            Double temp2 = 0.0;

            if (exp.equals("+")) {
                temp1 = stack.pop();
                temp2 = stack.pop();
                stack.push(temp1 + temp2);
            } else if (exp.equals("-")) {
                temp1 = stack.pop();
                temp2 = stack.pop();
                stack.push(temp1 - temp2);
            } else if (exp.equals("/")) {
                temp1 = stack.pop();
                temp2 = stack.pop();
                stack.push(temp1 / temp2);
            } else if (exp.equals("*")) {
                temp1 = stack.pop();
                temp2 = stack.pop();
                stack.push(temp1 * temp2);
            } else {
                Double d = Double.parseDouble(exp);
                stack.push(d);
            }

        }

        System.out.println(stack.pop());

    }
}

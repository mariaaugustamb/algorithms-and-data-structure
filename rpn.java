import java.util.Scanner;
import java.util.Stack;
import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class rpn {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        Stack<Double> stack = new Stack<Double>();

        try (BufferedReader br = Files.newBufferedReader(Paths.get("myStack.stk"))) {
            String exp;
            while ((exp = br.readLine()) != null) {

                // String exp = in.nextLine();
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

        } catch (IOException e) {
            System.err.format("IOException: %s%n", e);
        }

    }

}
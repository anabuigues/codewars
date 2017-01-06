package ana.buigues.codewars.onesandzeros;

import java.util.List;

public class BinaryArrayToNumber {

	public static int ConvertBinaryArrayToInt(List<Integer> binary) {
		StringBuffer numberBinary = new StringBuffer();

		for (Integer integer : binary) {
			numberBinary.append(integer);
		}

		return Integer.parseInt(numberBinary.toString(), 2);
	}
}
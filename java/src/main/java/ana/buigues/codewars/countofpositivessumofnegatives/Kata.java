package ana.buigues.codewars.countofpositivessumofnegatives;

public class Kata {
	public static int[] countPositivesSumNegatives(int[] input) {

		if (input == null || input.length == 0) {
			return new int[] {};
		}

		int positives = 0;
		int negatives = 0;

		for (int i = 0; i < input.length; i++) {
			int number = input[i];
			if (number > 0) {
				positives++;
			} else {
				negatives += number;
			}
		}
		return new int[] { positives, negatives };
	}
}
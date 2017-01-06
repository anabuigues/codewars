package ana.buigues.codewars.convertnumbertoreversedarrayofdigits;

public class Kata {
	public static int[] digitize(long n) {

		String[] number = String.valueOf(n).split("");
		int size = 0;
		int[] arr = new int[number.length];

		for (int i = number.length - 1; i >= 0; i--) {
			arr[size] = Integer.valueOf(number[i]);
			size++;
		}
		return arr;
	}
}
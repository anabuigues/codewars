package ana.buigues.codewars.stringrepeat;

public class Solution {
    public static String repeatStr(final int repeat, final String string) {
        StringBuffer result = new StringBuffer();
        
    	for(int i=0; i< repeat; i++){
    		result.append(string);
        }
    	
    	return result.toString();
    }
}

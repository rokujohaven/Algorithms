package Week2;
import java.util.*;

public class triangles_110618 {
	
	public static void upRightTriangle(int sides) {
		
		for (int i = 1; i <= sides; ++ i)
		{
			for (int j = 1; j <= i; ++j) {
				
				System.out.print("*");
				
			}
			
			System.out.println();

		}
		
	}
	
	public static void downRightTriangle(int sides) {
		
		for (int i = sides; i > 0; --i) {
			for (int j = 1; j <= i; ++j) {
				System.out.print("*");
			}
			System.out.println();
		}
	}
	
	public static void leftTriangle(int sides) {
		int stars = 1; 
		for (int i = sides; i > 0; --i) {
			for (int j = 1; j < i ; ++j) {
				System.out.print(" ");
			}
			for (int j = 0; j < stars; ++j) {
				System.out.print("*");
			}
			stars++;
			System.out.println();
		}
	}
	
	public static void pyramid(int length) {
		int stars = 1; 
		for (int i = length; i > 0; --i) {
			for (int j = 1; j < i; ++j) {
				System.out.print(" ");
			}
			for (int j = 0; j < stars; ++j) {
				System.out.print("* ");
			}
			stars++; 
			System.out.println();
		}
	}
	
	public static void diamond(int halfheight) {
		
		pyramid(halfheight); //top pyramid
		
		//bottom pyramid 
		int stars = halfheight-1; 
		for (int i = 1; i <= halfheight - 1; ++i) {//for each bottom row
			//which has less than half 
			for (int j = 1; j < i; ++j) { //print pyramid of spaces
				
				System.out.print(" ");
			}
			for (int j = stars; j > 0; --j) {
				
				System.out.print(" *");
			}
			stars--;
			System.out.println();
		}
		
	}
	
	public static void main(String[] args) {
		
	
		upRightTriangle(5); 
		System.out.println();
		
		downRightTriangle(5);
		System.out.println();
		
		leftTriangle(5); 
		System.out.println();
		
		pyramid(5);
		System.out.println();
		
		diamond(5);
	}

}

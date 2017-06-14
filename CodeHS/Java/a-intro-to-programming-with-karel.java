// 1.1.3  Our First Karel Program
move();
move();
putBall();
move();
move();

// 1.1.4  Your First Karel Program
move();
move();
move();
move();
takeBall();

// 1.1.5  Short Stack
move();
putBall();
putBall();
move();

// 1.2.3  Tennis Ball Square
/* Tennis Ball Square
 * This program has karel place a square of tennis balls
 * and return to his starting point.
 */
putBall();
move();
turnLeft();

putBall();
move();
turnLeft();

putBall();
move();
turnLeft();

putBall();
move();
turnLeft();	

// 1.2.4  Make a Tower
move();
turnLeft();
putBall();
move();
putBall();
move();
putBall();
move();
turnLeft();
turnLeft();
turnLeft();

// 1.2.5  Pyramid of Karel
putBall();
move();
putBall();
move();
putBall();
turnLeft();
move();
putBall();
move();
putBall();
turnLeft();
move();
turnLeft();
move();
putBall();
turnLeft();
turnLeft();
move();
turnLeft();
turnLeft();
turnLeft();
move();

// 1.3.3  Square Karel
public class SquareKarel extends Karel
{
	public void run()
	{
		putBall();
   	move();
		turnLeft();

		putBall();
		move();
		turnLeft();

		putBall();
		move();
		turnLeft();

		putBall();
		move();
		turnLeft();
	}
}

// 1.3.4  Tower Karel
public class TowerKarel extends Karel
{
	public void run()
	{
		move();
		turnLeft();
		putBall();
		move();
		putBall();
		move();
		putBall();
		move();
		turnLeft();
		turnLeft();
		turnLeft();
	}
}

// 1.3.5  Gold Medal Karel
public class GoldMedalKarel extends Karel
{
	public void run()
	{
		move();
		putBall();
		move();
		putBall();
		move();
		putBall();
		turnLeft();
		move();
		turnLeft();
		move();
		putBall();
		turnLeft();
		turnLeft();
		turnLeft();
		move();
		turnLeft();
		turnLeft();
		turnLeft();
	}
}

// 1.3.6  Maze Karel
public class MazeKarel extends Karel
{
	public void run()
	{
		move();
		move();
		move();
		move();
		turnLeft();
		move();
		move();
		move();
		move();
		turnLeft();
		move();
		move();
		move();
		turnLeft();
		move();
		move();
		move();
		turnLeft();
		turnLeft();
		turnLeft();
		move();
		turnLeft();
		turnLeft();
		turnLeft();
		move();
		move();
		move();
		move();
		move();
		turnLeft();
		turnLeft();
		turnLeft();
		move();
		move();
		move();
		turnLeft();
		turnLeft();
		turnLeft();
		move();
		turnLeft();
		move();
		turnLeft();
		move();
		turnLeft();
		turnLeft();
		turnLeft();
		move();
		move();
	}
}

// 1.4.3  Tower and Turn Right
public class TowerKarel extends Karel
{
	public void run()
	{
	  move();
		putBall();
		turnLeft();
		move();
		putBall();
		move();
		putBall();
		move();
		turnRight();
	}

	private void turnRight()
	{
		turnLeft();
		turnLeft();
		turnLeft();
	}
}

// 1.4.4  Slide Karel
public class SlideKarel extends Karel
{
	public void run()
	{
		putBall();
		move();
		turnRight();
		move();
		putBall();
		turnLeft();
		move();
		turnRight();
		move();
		putBall();
		turnLeft();
	}

	private void turnRight()
	{
		turnLeft();
		turnLeft();
		turnLeft();
	}
}

// 1.4.5  Fireman Karel
public class FiremanKarel extends Karel
{
	public void run()
	{
		turnRight();
		move();
		move();
		move();
		turnLeft();
	}

	private void turnRight()
	{
		turnLeft();
		turnLeft();
		turnLeft();
	}
}

// 1.5.3  Turn Around
public class TurnAroundKarel extends Karel
{
	public void run()
	{
		move();
		turnAround();
	}

	private void turnAround()
	{
		turnLeft();
		turnLeft();
	}
}

// 1.5.4  Pancakes
public class Pancakes extends Karel
{
	public void run()
	{
		move();
		makePancakes();
		move();
		move();
		makePancakes();
		move();
		move();
		makePancakes();
		move();
	}

	private void makePancakes()
	{
		putBall();
		putBall();
		putBall();
	}
}

// 1.5.5  Mario Karel
public class MarioKarel extends Karel
{
	public void run()
	{
		turnLeft();
		move();
		move();
		move();
		turnRight();
		move();
		collectCoins();
		collectCoins();
		collectCoins();
		takeBall();
		takeBall();
		turnRight();
		move();
		move();
		move();
		turnLeft();
	}

	private void collectCoins()
	{
		takeBall();
		takeBall();
		turnLeft();
		move();
		turnRight();
		move();
		move();
		turnRight();
		move();
		turnLeft();
	}

	private void turnRight()
	{
		turnLeft();
		turnLeft();
		turnLeft();
	}
}

// 1.6.3  Hurdle Karel
public class HurdleKarel extends Karel
{
	public void run()
	{
		runToHurdle();
		jumpHurdle();
		runToHurdle();
		jumpHurdle();
		runToFinish();
	}

	private void runToHurdle()
	{
		move();
		move();
		move();
	}

	private void jumpHurdle()
	{
		turnLeft();
		move();
		turnRight();
		move();
		turnRight();
		move();
		turnLeft();
	}
	
	private void turnRight()
	{
		turnLeft();
		turnLeft();
		turnLeft();
	}

	private void runToFinish()
	{
		move();
		move();
		move();
		move();
	}
}

// 1.6.4  The Two Towers
public class TwoTowers extends Karel
{
	public void run()
	{
		buildTower();
		moveToNextTower();
		buildTower();
		moveToFinish();
	}

	private void buildTower()
	{
		move();
		turnLeft();
		putBall();
		move();
		putBall();
		move();
		putBall();
	}

	private void moveToNextTower()
	{
		turnLeft();
		turnLeft();
		move();
		move();
		turnLeft();
		move();
	}

	private void moveToFinish()
	{
		move();
		turnRight();
	}

	private void turnRight()
	{
		turnLeft();
		turnLeft();
		turnLeft();
	}
}

// 1.7.3  Hurdle Karel (Comments - CodeHS example)
/* This program has Karel run a race by jumping
 * two hurdles. */
public class HurdleKarel extends Karel
{

    /* This method is our main entry point for the program.
     * Karel runs to the hurdle and jumps it twice, before
     * finishing the race.
     * Precondition: Karel should be in the bottom left
     * corner, facing east.
     * Postcondition: Karel should be at the end of the race. */
	public void run()
	{
		runToHurdle();
		jumpHurdle();
		runToHurdle();
		jumpHurdle();
		runToFinish();
	}

    /* This method has Karel move four times to finish the race.
     * Precondition: Karel has finished jumping the last hurdle.
     * Postcondition: Karel is at the end of the race. */
	private void runToFinish()
	{
    // This method has Karel move four times to finish the race.
		move();
		move();
		move();
		move();
	}

    /* This method has Karel run to a hurdle that is three spots
     * away.
     * Precondition: Karel is three spaces away from a hurdle,
     * facing east.
     * Postconding: Karel is right next to a hurdle, ready to jump
     * over it. */
	private void runToHurdle()
	{
		move();
		move();
		move();
	}

    /* This method has Karel jump over a hurdle that
     * is one row tall.
     * Precondtion: Karel is right next to a hurdle, facing east.
     * Postcondition: Karel has jumped over the hurdle and is on
     * the other side, facing east. */
	private void jumpHurdle()
	{
		turnLeft();
		move();
		turnRight();
		move();
		turnRight();
		move();
		turnLeft();
	}

    /* This method has Karel turn right.
     * Precondition: None, Karel can be facing any direction.
     * Postcondition: Karel will have turned right by 90 degrees. */
	private void turnRight()
	{
		turnLeft();
		turnLeft();
		turnLeft();
	}
}

// 1.7.4  The Two Towers + Comments
// Build two towers and end atop second tower
public class TwoTowers extends Karel
{
	/* Call methods to build both towers then 
	* move to finish position */
	public void run()
	{
		buildTower();
		moveToNextTower();
		buildTower();
		moveToFinish();
	}

	// Build one tower
	private void buildTower()
	{
		move();
		turnLeft();
		putBall();
		move();
		putBall();
		move();
		putBall();
	}

	// Move to next build tower start position
	private void moveToNextTower()
	{
		turnLeft();
		turnLeft();
		move();
		move();
		turnLeft();
		move();
	}

	// Move to finish position
	private void moveToFinish()
	{
		move();
		turnRight();
	}

	// Turn right method
	private void turnRight()
	{
		turnLeft();
		turnLeft();
		turnLeft();
	}
}

// 1.8.3  Hurdle Karel (with SuperKarel, CodeHS code)
/* This program has Karel run a race by jumping
 * two hurdles. */
public class HurdleKarel extends SuperKarel
{

    /* This method is our main entry point for the program.
     * Karel runs to the hurdle and jumps it twice, before
     * finishing the race.
     * Precondition: Karel should be in the bottom left
     * corner, facing east.
     * Postcondition: Karel should be at the end of the race. */
	public void run()
	{
		runToHurdle();
		jumpHurdle();
		runToHurdle();
		jumpHurdle();
		runToFinish();
	}

    /* This method has Karel move four times to finish the race.
     * Precondition: Karel has finished jumping the last hurdle.
     * Postcondition: Karel is at the end of the race. */
	private void runToFinish()
	{
    // This method has Karel move four times to finish the race.
		move();
		move();
		move();
		move();
	}

    /* This method has Karel run to a hurdle that is three spots
     * away.
     * Precondition: Karel is three spaces away from a hurdle,
     * facing east.
     * Postconding: Karel is right next to a hurdle, ready to jump
     * over it. */
	private void runToHurdle()
	{
		move();
		move();
		move();
	}

    /* This method has Karel jump over a hurdle that
     * is one row tall.
     * Precondtion: Karel is right next to a hurdle, facing east.
     * Postcondition: Karel has jumped over the hurdle and is on
     * the other side, facing east. */
	private void jumpHurdle()
	{
		turnLeft();
		move();
		turnRight();
		move();
		turnRight();
		move();
		turnLeft();
	}

// 1.8.4  The Two Towers + SuperKarel
// Build two towers and end atop second tower
public class TwoTowers extends SuperKarel
{
	/* Call methods to build both towers then 
	* move to finish position */
	public void run()
	{
		buildTower();
		moveToNextTower();
		buildTower();
		moveToFinish();
	}

	// Build one tower
	private void buildTower()
	{
		move();
		turnLeft();
		putBall();
		move();
		putBall();
		move();
		putBall();
	}

	// Move to next build tower start position
	private void moveToNextTower()
	{
		turnLeft();
		turnLeft();
		move();
		move();
		turnLeft();
		move();
	}

	// Move to finish position
	private void moveToFinish()
	{
		move();
		turnRight();
	}
}

// 1.9.3  Repeated Move
public class MovingKarel extends Karel
{
	public void run()
	{
		for (int = 0; i < 9; i++)
		{
			move();
		}
	}
}

// 1.9.4  Put Down Tennis Balls
public class TennisBallsKarel extends SuperKarel
{
	public void run()
	{
		for (int = 0; i < 6; i++)
		{
			putBall();
		}
		move();
	}
}

// 1.9.5  Marathon Karel
public class MarathonKarel extends SuperKarel
{
	public void run()
	{
		for (int i = 0; i < 26; i++)
		{
			move();
		}
	}
}

// 1.9.6  Take 'em All
public class TakeEmAllKarel extends SuperKarel
{
	public void run()
	{
		move();
		for (int i = 0; i < 100; i++)
		{
			takeBall();
		}
		move();
	}
}

// 1.9.7  Dizzy Karel
public class DizzyKarel extends SuperKarel
{
	public void run()
	{
		for (int i = 0; i < 32; i++)
		{
			turnLeft();
		}
	}
}

// 1.9.8 For Loop Square
public class SquareKarel extends SuperKarel
{
	public void run()
	{
		for (int i = 0; i < 4; i++)
		{
			putBall();
			move();
			turnLeft();
		}
	}
}

// 1.9.9  Lots of Hurdles
public class HurdlesKarel extends SuperKarel
{
	public void run()
	{
		for (int i = 0; i < 5; i++)
		{
			jumpHurdle();
		}
		private void jumpHurdle()
		{
			move();
			move();
			turnLeft();
			move();
			turnRight();
			move();
			turnRight();
			move();
			turnLeft();
		}
	}
}

// 1.10.3  Move to Wall
public class MoveToWallKarel extends SuperKarel
{
	public void run()
	{
		while (frontIsClear())
		{
			move();
		}
	}
}

// 1.10.4  Follow The Yellow Ball
public class YelloBallRoadKarel extends SuperKarel
{
	public void run()
	{
		while (ballsPresent())
		{
			move();
		}
	}
}

// 1.10.5  Just Keep Spinning
public class JustKeepSpinning extends SuperKarel
{
	public void run()
	{
		while (ballsPresent())
		{
			turnLeft();
			takeBall();
		}
	}
}

// 1.10.6  Lay Row of Tennis Balls
public class TennisBallRowKarel extends SuperKarel
{
	public void run()
	{
		while(frontIsClear())
		{
			putBall();
			move();
		}
		putBall();
	}
}

// 1.10.7  Big Tower
public class BigTowerKarel extends SuperKarel
{
	public void run()
	{
		while (notFacingNorth())
		{
			turnLeft();
		}
		while (frontIsClear())
		{
			putBall();
			move();
		}
		putBall();
	}
}

// 1.11.3  If Statemens
public class IfStatements extends SuperKarel
{
	public class run()
	{
		move();
		if (frontIsClear())
		{
			move();
		}
	}
}

// 1.11.4  Safe Take Ball
public class SafeTakeBall extends SuperKarel
{
	public void run()
	{
		safeTakeBall();
		move();
		safeTakeBall();
	}
	private void safeTakeBall()
	{
		if (ballsPresent())
		{
			takeBall();
		}
	}
}

// 1.11.5  Is There a Ball?
public class IsThereABallKarel extends SuperKarel
{
	public void run()
	{
		if (noBallsPresent())
		{
			putBall();
		}
		move();
	}
}

// 1.12.3  Flip Karel
public class FlipKarel extends SuperKarel
{
	public void run()
	{
		flipSpot();
		move();
		flipSpot();
		move();
		flipSpot();
		move();
		flipSpot();
	}
	private void flipSpot()
	{
		if (noBallsPresent())
		{
			putBall();
		}
		else
		{
			takeBall();
		}
	}
}

// 1.12.4  Right Side Up
public class RightSideUp extends SuperKarel
{
	public void run()
	{
		if (facingSouth())
		{
			turnLeft();
		}
		else
		{
			turnAround();
		}
	}
}

// 1.13.3  Cleanup Karel
public class CleanupKarel extends SuperKarel
{
	public void run()
	{
		while (frontIsClear())
		{
			if (ballsPresent())
			{
				takeBall();
			}
			move();
		}
		if (ballsPresent())
		{
			takeBall();
		}
	}
}

// 1.13.4  Random Hurdles
public class RandomHurdles extends SuperKarel
{
	public void run()
	{
		for (int i = 0; i < 13; i++)
		{
			if (frontIsClear())
			{
				move();
			}
			else {
				jumpHurdle();
			}
		}
	}
	private void jumpHurdle()
	{
		turnLeft();
		move();
		turnRight();
		move();
		turnRight();
		move();
		turnLeft();
	}
}

// 1.14.2 Move Tennis Ball Stack
public class MoveStack extends SuperKarel
{
	public void run()
	{
		move();
		while (ballsPresent())
		{
			moveOneBall();
		}
	}
	private void moveOneBall()
	{
		takeBall();
		move();
		putBall();
		turnAround();
		move();
		turnAround();
	}
}

// 1.14.3  Climbing Karel
public class ClimbingKarel extends SuperKarel
{
	public void run()
	{
		for (int i = 0; i < 7; i++)
		{
			moveUp();
		}
	}
	private void moveUp()
	{
		while (leftIsBlocked())
		{
			move();
		}
		turnLeft();
		move();
		turnLeft();
		moveToWall();
		turnAround();
	}
	private void moveToWall()
	{
		while (frontIsClear())
		{
			move();
		}
	}
}

// 1.15.3  Dance and Clean Karel
public class DanceAndCleanKarel extends SuperKarel
{
	public void run()
	{
		while (frontIsClear())
		{
			ifBallsArePresent();
			move();
		}
		ifBallsArePresent();
	}
	private void ifBallsArePresent()
	{
		if (ballsPresent())
		{
			while (ballsPresent())
			{
				takeBall();
			}
			dance();
		}
	}
	private void dance()
	{
		for (int i = 0; i < 4; i++)
		{
			turnLeft();
		}
	}
}

// 1.15.4  Diagonal
public class Diagonal extends SuperKarel
{
	public void run()
	{
		while(frontIsClear())
		{
			putBall();
			move();
			turnLeft();
			move();
			for(int i = 0; i < 3; i++)
			{
				turnLeft();
			}
		}
		putBall();
	}
}

// 1.15.5  Staircase
public class Staircase extends SuperKarel
{    
	public void run()
	{
		putBall();
		while(frontIsClear())
		{
			turnLeft();
			while (ballsPresent()) 
			{
				move();
			}
			turnRight();
			move();
			createStep();
		}
	}

	private void createStep()
	{
		turnRight();
		putBall();
		while (frontIsClear())
		{
			move();
			putBall();
		}
		turnLeft();
	}
}

// 1.16.1  Fetch
// Gets and returns 1 ball
public class Fetch extends SuperKarel
{
	public void run()
	{
		getBall();
		returnBall();
	}
	// Goes to get ball off shelf
	private void getBall()
	{
		turnLeft();
		move4();
		turnRight();
		move();
		move();
		takeBall();
	}
	// moves 4 spaces
	private void move4()
	{
		move();
		move();
		move();
		move();
	}
	// Returns ball to starting position
	private void returnBall()
	{
		turnAround();
		move();
		move();
		turnLeft();
		move4();
		turnLeft();
		putBall();
	}
}

// 1.16.2  Racing Karel
/* Run 8 laps, placing a ball in each corner
* on every lap */
public class RacingKarel extends SuperKarel
{
	// Run 8 laps
	public void run()
	{
		for (int i = 0; i < 8; i++)
		{
			runOneLap();
		}
	}
	// Run 1 lap
	private void runOneLap()
	{
		for (int i = 0; i < 4; i++)
		{
			runToTurn();
		}
	}
	/* Run to corner and place ball, 
	* then turn left */
	private void runToTurn()
	{
		while (frontIsClear())
		{
			move();
		}
		putBall();
		turnLeft();
	}
}

// 1.16.3  Tower Builder
/* Build towers 3 balls high on every
* other column, for any size world */
public class TowerBuilder extends SuperKarel
{
	public void run()
	{
		// Build first tower
		buildTower();
		// Build towers on remaining odd columns
		while (frontIsClear())
		{
			buildNextTower();
		}
	}
	private void buildTower()
	{
		turnLeft();
		for (int i = 0; i < 3; i++)
		{
			putBall();
			move();
		}
		turnAround();
		while (frontIsClear())
		{
			move();
		}
		turnLeft();
	}
	// Build next tower if room available
	private void buildNextTower()
	{
		move();
		if (frontIsClear())
		{
			move();
			buildTower();
		}
	}
}

// 1.16.4  Super Cleanup Karel
// Cleanup random balls from any size world
public class SuperCleanupKarel extends SuperKarel
{
	public void run()
	{
		cleanRow();
		while (leftIsClear())
		{
			moveUpOneRow();
			cleanRow();
		}
	}
	// Clean one row of balls
	private void cleanRow()
	{
		while (frontIsClear())
		{
			if (ballsPresent())
			{
				takeBall();
			}
			move();
		}
		if (ballsPresent())
		{
			takeBall();
		}
	}
	// Move up one row and to left side of world
	private void moveUpOneRow()
	{
		turnLeft();
		move();
		turnLeft();
		while (frontIsClear())
		{
			move();
		}
		turnAround();
	}
}

// 1.16.5  Double Tennis Balls
/* Double unknown number of balls and return 
* balls and Karel to starting positions */
public class DoubleTennisBallsKarel extends SuperKarel
{
	public void run()
	{
		doubleBalls();
		returnBalls();
		finishPosition();
	}
	// Double stack by making two stacks
	private void doubleBalls()
	{
		move();
		while (ballsPresent())
		{
			takeBall();
			move();
			putBall();
			move();
			putBall();
			turnAround();
			move();
			move();
			turnAround();
		}
	}
	// Return both stacks to start position
	private void returnBalls()
	{
		move();
		while (ballsPresent())
		{
			takeBall();
			move();
			takeBall();
			turnAround();
			move();
			move();
			putBall();
			putBall();
			turnAround();
			move();
		}
	}
	// Return Karel to start position
	private void finishPosition()
	{
		turnAround();
		move();
		move();
		turnAround();
	}
}

// 1.16.6  Midpoint Karel
// Put one ball at midpoint of any size world
public class MidpointKarel extends SuperKarel
{
	public void run()
	{
		placeBalls();
		collectBalls();
		countHalfBalls();
		moveToMidpoint();
	}
	// Put balls across bottom row
	private void placeBalls()
	{
		putBall();
		while (frontIsClear())
		{
			move();
			putBall();
		}
	}
	// Collect row of balls
	private void collectBalls()
	{
		turnAround();
		while (frontIsClear())
		{
			move();
			if (ballsPresent())
			{
				takeBall();
				turnAround();
				moveWhileFrontIsClear();
				putBall();
				turnAround();
			}
		}
		turnAround();
		moveWhileFrontIsClear();
		turnAround();
	}
	// Count half stack of balls
	private void countHalfBalls()
	{
		while (ballsPresent())
		{
			takeBall();
			if (ballsPresent())
			{
				takeBall();
				move();
				while (ballsPresent())
				{
					move();
				}
				putBall();
				turnAround();
				moveWhileFrontIsClear();
				turnAround();
			}
		}
	}
	// Move to midpoint, collecting all balls
	private void moveToMidpoint()
	{
		if (frontIsClear())
		{
			move();
			while (ballsPresent())
			{
				takeBall();
				move();
			}
			turnAround();
			move();
			putBall();
		}
		else
		{
			putBall();
			turnAround();
		}
	}
	// Move while front is clear
	private void moveWhileFrontIsClear()
	{
		while (frontIsClear())
		{
			move();
		}
	}
}

































































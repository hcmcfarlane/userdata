import "./Instructions.css";

const Instructions = () => {
  return (
    <>
      <h2>Goal</h2>
      <p>
        Recreate the website design as shown in the image below! Remember to
        read the tasks and hints carefully before you start.
      </p>

      <img
        className="design-img"
        src="design.png"
        alt="A grid of user cards showing a dummy img, the user's name, a coloured border and a number between 1 and 100"
      />

      <h3>Task 1</h3>
      <p>
        For your MVP, build a Card component for one user and display it. You
        can start with just displaying the data and coloured border and add
        styling later, or do both now, either way is fine.
      </p>

      <h3>Task 2</h3>
      <p>Map over the Card component to display all users on a flexgrid.</p>

      <h3>Task 3</h3>
      <p>
        When you click the Logout button, a state change occurs and the text on
        the button updates. Write a test that ensures this functionality works
        as expected.
      </p>

      <h3>Task 4</h3>
      <p>If you didn't add any styling in Task 1, add some now. </p>

      <h4>Helpful hints</h4>
      <ul>
        <li>
          The data is stored in the <code>lib</code> directory as JSON
        </li>
        <li>
          The user card
          <ul>
            <li>Display the user's name</li>
            <li>
              If the user's ranking is less than 50, display a <code>–</code>{" "}
              next to the number; otherwise, display a <code>+</code>
            </li>
            <li>
              Import the image at the top of the card – but beware, some of the
              image URL fields are <code>null</code>. What should you display
              instead?
            </li>
            <li>
              The user's favourite colour should be the colour of the card
              border
            </li>
            <li>
              The user's <code>id</code> is not displayed on the card, but it
              might be useful for something else.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Discussion and/or stretch goals</h3>
      <p>
        What other tests would you write to test other components, such as the
        Card?
      </p>
      <p>
        Instead of our (somewhat contrived) example of indicating low rankings
        with a <code>–</code> and higher rankings with a <code>+</code>, how
        would you go about sorting our users by their rank? What edge cases
        might you encounter, and how would you handle them?
      </p>
    </>
  );
};

export default Instructions;

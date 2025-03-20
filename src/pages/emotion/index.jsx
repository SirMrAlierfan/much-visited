import { css } from "@emotion/css";
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 16px 32px;
  background-color: #ff4081;
  font-size: 18px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  &:hover {
    background-color: #e91e63;
    transform: scale(1.05);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 40px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.6;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: left;
    font-size: 16px;
  }

  th {
    background-color: #ff4081;
    color: white;
    font-weight: bold;
  }

  td {
    background-color: #fce4ec;
  }
`;

const Emotion = () => {
  return (
    <Container>
      <h1>Emotion CSS in React</h1>
      <p>
        Emotion is a fast, flexible, and performant CSS-in-JS library for React.
      </p>

      <StyledTable>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Installation Command</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Install Emotion CSS</td>
            <td>
              <code>npm i @emotion/css</code>
            </td>
          </tr>
          <tr>
            <td>Install Emotion React</td>
            <td>
              <code>npm i @emotion/react</code>
            </td>
          </tr>
          <tr>
            <td>Install Styled Components in Emotion</td>
            <td>
              <code>npm i @emotion/styled @emotion/react</code>
            </td>
          </tr>
        </tbody>
      </StyledTable>
      <div
        className={css`
          padding: 20px;
          background-color: #ff4081;
          font-size: 18px;
          border-radius: 10px;
          color: white;
          text-align: center;
          margin: 30px 0;
          transition: all 0.3s ease;
          box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
          &:hover {
            background-color: #e91e63;
            transform: scale(1.05);
          }
        `}
      >
        Hover to change color.
      </div>

      <Button>This is a button component.</Button>
      <h2 style={{ marginTop: "30px" }}>
        Differences between Emotion and Material-UI
      </h2>
      <ul style={{ textAlign: "left", paddingLeft: "20px", marginTop: "20px" }}>
        <li>
          <strong>Styling Approach:</strong> Emotion is a CSS-in-JS library,
          while Material-UI uses JSS.
        </li>
        <li>
          <strong>Flexibility:</strong> Emotion allows full customization, while
          Material-UI follows Google’s Material Design principles.
        </li>
        <li>
          <strong>Dependencies:</strong> Emotion is independent, whereas
          Material-UI relies on Material Design standards.
        </li>
        <li>
          <strong>Performance:</strong> Emotion is optimized for speed, while
          Material-UI can be heavier due to its internal styling system.
        </li>
        <li>
          <strong>Ease of Use:</strong> Emotion requires CSS-in-JS knowledge,
          whereas Material-UI provides pre-built components with strong
          documentation.
        </li>
      </ul>
    </Container>
  );
};

export default Emotion;

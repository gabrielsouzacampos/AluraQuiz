/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>#JavaScriptQuiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosEvento) => { infosEvento.preventDefault(); router.push(`/quiz?name=${name}`); }}>
              <Input
                placeholder="Diz ai seu nome"
                onChange={(infosEvento) => {
                  setName(infosEvento.target.value);
                }}
                name="NomeDoUsuario"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>

        </Widget>
        <Widget>
          <Widget.Content>
            <p>teste test teste.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gabrielsouzacampos" />
    </QuizBackground>
  );
}

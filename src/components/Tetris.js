import React from 'react'

import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

import { createStage } from '../gameHelpers';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="score" />
            <Display text="rows" />
            <Display text="level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris

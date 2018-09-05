import React, { Component } from 'react';

class ImageDrawer extends Component {
    position = {
        offsetX: 0,
        offsetY: 0
    };

    line = [];

    state = {
        isDrawing: false,
        userStrokeStyle: '#000',
        canvasImage: ''
    };

    componentDidMount() {
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 5;
    }

    onMouseDown = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;

        this.setState({
            isDrawing: true
        });
        this.position = { offsetX, offsetY };
    }

    onMouseMove({ nativeEvent }) {
        if (this.state.isDrawing) {
          const { offsetX, offsetY } = nativeEvent;
          const offSetData = { offsetX, offsetY };
          // Set the start and stop position of the paint event.
          const positionData = {
            start: { ...this.position },
            stop: { ...offSetData },
          };
          // Add the position to the line array
          this.line = this.line.concat(positionData);
          this.paint(this.position, offSetData, this.state.userStrokeStyle);
        }
      }

      endPaintEvent = () => {
        if (this.state.isDrawing) {
          this.setState({
              isDrawing: false
          });
        }
    }

    changeColor = evt => {
        evt.preventDefault();
        this.setState({
            userStrokeStyle: evt.currentTarget.dataset.color
        });
    }
    paint = (position, currPos, strokeStyle) => {
        const { offsetX, offsetY } = currPos;
        const { offsetX: x, offsetY: y } = position;

        this.ctx.beginPath();
        this.ctx.strokeStyle = strokeStyle;
        // Move the the prevPosition of the mouse
        this.ctx.moveTo(x, y);
        // Draw a line to the current position of the mouse
        this.ctx.lineTo(offsetX, offsetY);
        // Visualize the line using the strokeStyle
        this.ctx.stroke();
        this.position = { offsetX, offsetY };
      }

    render() {
        return (
            <div>
                <canvas
                 className="canvas"
                 width="400"
                 height="400"
                 ref={(ref) => (this.canvas = ref)}
                 onMouseDown={(event) => {this.onMouseDown(event) }}
                 onMouseLeave={(event) => {this.endPaintEvent(event) }}
                 onMouseUp={(event) => {this.endPaintEvent(event) }}
                 onMouseMove={(event) => {this.onMouseMove(event) }}
                />
                <div>
                    <button
                        data-color='BLACK'
                        onClick={(event) => {this.changeColor(event) }}
                    >
                        <span className="color__red">
                            BLACK
                        </span>
                    </button>
                    <button
                        data-color='RED'
                        onClick={(event) => {this.changeColor(event) }}
                    >
                        <span className="color__red">
                            RED
                        </span>
                    </button>
                    <button
                        data-color='GREEN'
                        onClick={(event) => {this.changeColor(event) }}
                    >
                        <span className="color__red">
                            GREEN
                        </span>
                    </button>
                    <button
                        data-color='BLUE'
                        onClick={(event) => {this.changeColor(event) }}
                    >
                        <span className="color__red">
                            BLUE
                        </span>
                    </button>
                    <button
                        data-color='WHITE'
                        onClick={(event) => {this.changeColor(event) }}
                    >
                        <span className="color__red">
                            ERASER
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}

export default ImageDrawer;
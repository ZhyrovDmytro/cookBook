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
        this.canvasContext = this.canvas.getContext('2d');
        this.canvasContext.lineJoin = 'round';
        this.canvasContext.lineCap = 'round';
        this.canvasContext.lineWidth = 5;
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

        this.canvasContext.beginPath();
        this.canvasContext.strokeStyle = strokeStyle;
        // Move the the prevPosition of the mouse
        this.canvasContext.moveTo(x, y);
        // Draw a line to the current position of the mouse
        this.canvasContext.lineTo(offsetX, offsetY);
        // Visualize the line using the strokeStyle
        this.canvasContext.stroke();
        this.position = { offsetX, offsetY };
      }

    render() {
        return (
            <div className="image-drawer">
                <canvas
                 className="canvas image-drawer__canvas"
                 width="280"
                 height="280"
                 ref={(ref) => (this.canvas = ref)}
                 onMouseDown={(event) => {this.onMouseDown(event) }}
                 onMouseLeave={(event) => {this.endPaintEvent(event) }}
                 onMouseUp={(event) => {this.endPaintEvent(event) }}
                 onMouseMove={(event) => {this.onMouseMove(event) }}
                />
                <div className="image-drawer__btns">
                    <button
                        className="btn btn--black"
                        data-color='BLACK'
                        onClick={(event) => {this.changeColor(event) }}
                    >
                        <span className="color__red">
                            BLACK
                        </span>
                    </button>
                    <button
                        className="btn btn--red"
                        data-color='RED'
                        onClick={(event) => {this.changeColor(event) }}
                    >
                        <span className="color__red">
                            RED
                        </span>
                    </button>
                    <button
                        className="btn btn--green"
                        data-color='GREEN'
                        onClick={(event) => {this.changeColor(event) }}
                    >
                        <span className="color__red">
                            GREEN
                        </span>
                    </button>
                    <button
                        className="btn btn--blue"
                        data-color='BLUE'
                        onClick={(event) => {this.changeColor(event) }}
                    >
                        <span className="color__red">
                            BLUE
                        </span>
                    </button>
                    <button
                        className="btn"
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
'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Shuffle, RotateCcw, Trophy, Heart } from 'lucide-react'

const PhotoPuzzleGame = () => {
  const [pieces, setPieces] = useState([])
  const [draggedPiece, setDraggedPiece] = useState(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [moves, setMoves] = useState(0)
  const [difficulty, setDifficulty] = useState(3) // 3x3 grid
  const [selectedImage, setSelectedImage] = useState('1.png')
  const canvasRef = useRef(null)

  // Initialize puzzle pieces
  useEffect(() => {
    initializePuzzle()
  }, [difficulty, selectedImage])

  const initializePuzzle = () => {
    const totalPieces = difficulty * difficulty
    const newPieces = []
    
    for (let i = 0; i < totalPieces; i++) {
      const row = Math.floor(i / difficulty)
      const col = i % difficulty
      
      newPieces.push({
        id: i,
        currentPosition: i,
        correctPosition: i,
        row,
        col,
        isEmpty: i === totalPieces - 1, // Last piece is empty for sliding
        bgPosition: `-${col * (100 / (difficulty - 1))}% -${row * (100 / (difficulty - 1))}%`
      })
    }
    
    // Shuffle pieces
    shufflePieces(newPieces)
    setPieces(newPieces)
    setIsCompleted(false)
    setMoves(0)
  }

  const shufflePieces = (pieces) => {
    const shuffled = [...pieces]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = shuffled[i].currentPosition
      shuffled[i].currentPosition = shuffled[j].currentPosition
      shuffled[j].currentPosition = temp
    }
    return shuffled
  }

  const handlePieceClick = (clickedPiece) => {
    if (clickedPiece.isEmpty || isCompleted) return

    const emptyPiece = pieces.find(p => p.isEmpty)
    const emptyPos = emptyPiece.currentPosition
    const clickedPos = clickedPiece.currentPosition

    // Check if pieces are adjacent
    const emptyRow = Math.floor(emptyPos / difficulty)
    const emptyCol = emptyPos % difficulty
    const clickedRow = Math.floor(clickedPos / difficulty)
    const clickedCol = clickedPos % difficulty

    const isAdjacent = 
      (Math.abs(emptyRow - clickedRow) === 1 && emptyCol === clickedCol) ||
      (Math.abs(emptyCol - clickedCol) === 1 && emptyRow === clickedRow)

    if (isAdjacent) {
      // Swap positions
      const newPieces = pieces.map(piece => {
        if (piece.id === clickedPiece.id) {
          return { ...piece, currentPosition: emptyPos }
        } else if (piece.isEmpty) {
          return { ...piece, currentPosition: clickedPos }
        }
        return piece
      })

      setPieces(newPieces)
      setMoves(prev => prev + 1)
      
      // Check if completed
      checkCompletion(newPieces)
    }
  }

  const checkCompletion = (currentPieces) => {
    const isComplete = currentPieces.every(piece => 
      piece.currentPosition === piece.correctPosition
    )
    
    if (isComplete) {
      setIsCompleted(true)
      // Show confetti or celebration
      setTimeout(() => {
        alert(`🎉 Congratulations! Completed in ${moves + 1} moves!`)
      }, 500)
    }
  }

  const handleImageUpload = (event) => {
    // Removed - using fixed image 1.png
  }

  const getPieceStyle = (piece) => {
    const row = Math.floor(piece.currentPosition / difficulty)
    const col = piece.currentPosition % difficulty
    const size = 280 / difficulty
    
    return {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      left: `${col * size}px`,
      top: `${row * size}px`,
      backgroundImage: piece.isEmpty ? 'none' : `url(${selectedImage})`,
      backgroundSize: '280px 280px',
      backgroundPosition: piece.bgPosition,
      border: piece.isEmpty ? '2px dashed #e5e7eb' : '2px solid #fff',
      borderRadius: '8px',
      cursor: piece.isEmpty ? 'default' : 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: piece.isEmpty ? '#f3f4f6' : 'transparent',
      boxShadow: piece.isEmpty ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      opacity: piece.isEmpty ? 0.5 : 1
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            🧩 Photo Puzzle Game
          </h1>
          <p className="text-gray-600">Solve the puzzle by arranging the pieces!</p>
        </div>

        {/* Game Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Difficulty Selector */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Difficulty:</span>
              <select 
                value={difficulty} 
                onChange={(e) => setDifficulty(Number(e.target.value))}
                className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-1 text-sm"
              >
                <option value={3}>Easy (3×3)</option>
                <option value={4}>Medium (4×4)</option>
                <option value={5}>Hard (5×5)</option>
              </select>
            </div>

            {/* Game Stats */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">{moves}</div>
                <div className="text-xs text-gray-500">Moves</div>
              </div>
              
              {isCompleted && (
                <div className="flex items-center gap-2 text-green-600">
                  <Trophy className="w-5 h-5" />
                  <span className="font-medium">Completed!</span>
                </div>
              )}
            </div>

            {/* Control Buttons */}
            <div className="flex gap-2">
              <button
                onClick={initializePuzzle}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-2 rounded-full hover:from-purple-500 hover:to-purple-600 transition-all"
              >
                <Shuffle className="w-4 h-4" />
                <span className="text-sm">Shuffle</span>
              </button>
              
              <button
                onClick={() => {
                  setPieces(pieces.map(p => ({ ...p, currentPosition: p.correctPosition })))
                  setIsCompleted(true)
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-full hover:from-green-500 hover:to-green-600 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="text-sm">Solve</span>
              </button>
            </div>
          </div>
        </div>

        {/* Puzzle Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Original Image Preview */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Original Image</h3>
            <div className="w-48 h-48 rounded-xl overflow-hidden shadow-md">
              <img 
                src={selectedImage} 
                alt="Original" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Puzzle Board */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Puzzle Board {isCompleted && <span className="text-green-500">✨ Completed!</span>}
            </h3>
            
            <div 
              className="relative bg-gray-100 rounded-xl overflow-hidden"
              style={{ width: '280px', height: '280px' }}
            >
              {pieces.map((piece) => (
                <div
                  key={piece.id}
                  style={getPieceStyle(piece)}
                  onClick={() => handlePieceClick(piece)}
                  className={`
                    ${!piece.isEmpty ? 'hover:scale-105 hover:shadow-lg' : ''}
                    ${isCompleted && !piece.isEmpty ? 'animate-pulse' : ''}
                  `}
                >
                  {piece.isEmpty && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-400 text-sm">Empty</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Play</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <span className="text-pink-500">1.</span>
              <span>Choose your difficulty level (3×3, 4×4, or 5×5)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-500">2.</span>
              <span>Click on pieces adjacent to the empty space to move them</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-500">3.</span>
              <span>Arrange all pieces to recreate the original image</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-500">4.</span>
              <span>Try to complete the puzzle in the fewest moves possible!</span>
            </div>
          </div>
        </div>

        {/* Completion Celebration */}
        {isCompleted && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 text-center max-w-md mx-4 animate-bounce">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Congratulations!</h2>
              <p className="text-gray-600 mb-4">
                You completed the puzzle in <span className="font-bold text-pink-600">{moves}</span> moves!
              </p>
              <button
                onClick={() => setIsCompleted(false)}
                className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-2 rounded-full hover:from-pink-500 hover:to-purple-600 transition-all"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PhotoPuzzleGame
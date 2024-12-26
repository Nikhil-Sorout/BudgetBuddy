import { View, Text, TextStyle } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

interface TypeWriterProps {
    text: string,
    speed: number,
    textStyle?: TextStyle,
    onComplete?: ()=>void
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, speed, textStyle, onComplete }) => {
    
    // The text to be displayed
    const [displayedText, setDisplayedText] = useState("")
    
    // Creating a ref for the displayed text
    const displayedTextRef = useRef("");
    
    let index = useRef(0)
    
    // ref to avoid re-render
    let hasCompletedRef = useRef<boolean>(false)

    useEffect(() => {

        if(hasCompletedRef.current) return

        index.current = 0
        setDisplayedText("")
        displayedTextRef.current = ""
        const intervalId = setInterval(() => {
            if (index.current < text.length) {
                displayedTextRef.current += text.charAt(index.current)
                setDisplayedText(()=>displayedTextRef.current)
                index.current++
            }

            else {
                clearInterval(intervalId);
                hasCompletedRef.current = true
                onComplete?.()

            }
        }, speed)
        
        return () => clearInterval(intervalId);
    }, [text, speed, index, onComplete]);

    return (
        <Text style={textStyle}>{displayedText}</Text>
    )
}

export default TypeWriter
package com.renacimiento

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val terminalText = findViewById<TextView>(R.id.terminalText)

        terminalText.text = """
            En el principio era el Verbo,
            y el Verbo era con Dios,
            y el Verbo era Dios.
            
            — Juan 1:1
        """.trimIndent()
    }
}


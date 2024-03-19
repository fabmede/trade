package com.ft.business.executor;

import java.io.File;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.Map;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import javax.tools.JavaCompiler;
import javax.tools.ToolProvider;

public class ExecutorJava {

    public static void executeJava() throws Exception {
        // Prepare source somehow.
        String source = "import java.util.Map; public class Rule1 {\r\n" + //
                "\r\n" + //
                "    public Map<String, Object> executeRule() {\r\n" + //
                "\r\n" + //
                "        System.out.println(\"Executou o método\");\r\n" + //
                "        return null;\r\n" + //
                "    }\r\n" + //
                "}";

        // Save source in .java file.
        File root = Files.createTempDirectory("java").toFile();
        File sourceFile = new File(root, "Rule1.java");
        sourceFile.getParentFile().mkdirs();
        Files.write(sourceFile.toPath(), source.getBytes(StandardCharsets.UTF_8));

        // Compile source file.
        JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
        compiler.run(null, null, null, sourceFile.getPath());

        // Load and instantiate compiled class.
        URLClassLoader classLoader = URLClassLoader.newInstance(new URL[] { root.toURI().toURL() });
        Class<?> cls = Class.forName("Rule1", true, classLoader); // Should print "hello".
        Object instance = cls.getDeclaredConstructor().newInstance(); // Should print "world".
        System.out.println(instance); // Should print "test.Test@hashcode".
    }

    public static Object executeJavaScript(String source) {
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("graal.js");
        Object result = null;

        try {
             result = engine.eval(source);
            //Invocable invocable = (Invocable) engine;
            //result = invocable.invokeFunction("composeGreeting", "baeldung");

        } catch (ScriptException e) {
            result = e.getMessage();
        }

        return result;

    }

    public static void main(String[] args) throws Exception {
        // executeJava();
        executeJavaScript("console.log('teste');");
    }

}

class Rule1 {

    public Map<String, Object> executeRule() {

        System.out.println("Executou o método");
        return null;
    }
}
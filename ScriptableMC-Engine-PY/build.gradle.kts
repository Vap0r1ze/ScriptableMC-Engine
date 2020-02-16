plugins {
    java
    id("org.jetbrains.kotlin.jvm")
    id("com.github.johnrengelman.shadow")
    id("org.jetbrains.gradle.plugin.idea-ext")
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility  = JavaVersion.VERSION_1_8
}

idea {
    module {
        isDownloadJavadoc = true
        isDownloadSources = true
    }
}

dependencies {
    implementation(project(":ScriptableMC-Engine-Core"))


    // GraalVM SDK & GraalPython Engine
    implementation("org.graalvm.sdk:graal-sdk:19.3.1")
    implementation("org.graalvm.truffle:truffle-api:19.3.1")
    implementation(files("libraries/graalpython.jar"))
    implementation(files("libraries/sulong-api.jar"))
    implementation(files("libraries/sulong.jar"))


    implementation("com.github.jkcclemens:khttp:-SNAPSHOT")
    compileOnly("org.spigotmc:spigot-api:1.15.2-R0.1-SNAPSHOT")
    implementation("co.aikar:acf-paper:0.5.0-SNAPSHOT")
    implementation("fr.minuskube.inv:smart-invs:1.2.7")
    compileOnly("me.clip:placeholderapi:2.10.4")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("org.jetbrains.kotlin:kotlin-reflect")

    testImplementation("junit", "junit", "4.12")
}

tasks.compileKotlin {
    kotlinOptions.jvmTarget = "1.8"
    kotlinOptions.javaParameters = true
}
tasks.compileTestKotlin {
    kotlinOptions.jvmTarget = "1.8"
    kotlinOptions.javaParameters = true
}

tasks.jar {

}

tasks.shadowJar {
    archiveFileName.set("ScriptableMC-Engine-PY.jar")
    relocate("co.aikar.commands", "com.pixlfox.scriptablemc.acf")
    mergeServiceFiles()
}
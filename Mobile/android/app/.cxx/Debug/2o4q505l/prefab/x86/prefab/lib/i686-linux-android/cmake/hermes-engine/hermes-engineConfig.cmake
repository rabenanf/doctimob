if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/media/kennedy/Data/AndroidGradle/gradle/caches/8.12/transforms/3811bdfdb66799e659aa3d643c45c971/transformed/jetified-hermes-android-0.78.2-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/media/kennedy/Data/AndroidGradle/gradle/caches/8.12/transforms/3811bdfdb66799e659aa3d643c45c971/transformed/jetified-hermes-android-0.78.2-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()


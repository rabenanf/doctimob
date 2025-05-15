if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/etech/.gradle/caches/8.12/transforms/3811bdfdb66799e659aa3d643c45c971/transformed/jetified-hermes-android-0.78.2-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/etech/.gradle/caches/8.12/transforms/3811bdfdb66799e659aa3d643c45c971/transformed/jetified-hermes-android-0.78.2-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()


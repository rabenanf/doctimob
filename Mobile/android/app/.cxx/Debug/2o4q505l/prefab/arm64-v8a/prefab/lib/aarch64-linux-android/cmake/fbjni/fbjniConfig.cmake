if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/media/kennedy/Data/AndroidGradle/gradle/caches/8.12/transforms/a8b92c8222e2e1e6b43cad54fdde4c10/transformed/jetified-fbjni-0.7.0/prefab/modules/fbjni/libs/android.arm64-v8a/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/media/kennedy/Data/AndroidGradle/gradle/caches/8.12/transforms/a8b92c8222e2e1e6b43cad54fdde4c10/transformed/jetified-fbjni-0.7.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()


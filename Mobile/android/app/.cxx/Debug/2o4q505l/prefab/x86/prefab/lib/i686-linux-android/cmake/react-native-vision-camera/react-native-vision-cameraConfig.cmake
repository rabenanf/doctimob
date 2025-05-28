if(NOT TARGET react-native-vision-camera::VisionCamera)
add_library(react-native-vision-camera::VisionCamera SHARED IMPORTED)
set_target_properties(react-native-vision-camera::VisionCamera PROPERTIES
    IMPORTED_LOCATION "/media/kennedy/3E509D70509D301F/ubuntuProject/doctimob/Doctimob/Mobile/node_modules/react-native-vision-camera/android/build/intermediates/cxx/Debug/26165y31/obj/x86/libVisionCamera.so"
    INTERFACE_INCLUDE_DIRECTORIES "/media/kennedy/3E509D70509D301F/ubuntuProject/doctimob/Doctimob/Mobile/node_modules/react-native-vision-camera/android/build/headers/visioncamera"
    INTERFACE_LINK_LIBRARIES ""
)
endif()


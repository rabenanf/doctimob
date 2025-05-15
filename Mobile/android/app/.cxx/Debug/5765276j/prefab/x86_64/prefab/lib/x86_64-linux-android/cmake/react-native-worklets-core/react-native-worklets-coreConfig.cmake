if(NOT TARGET react-native-worklets-core::rnworklets)
add_library(react-native-worklets-core::rnworklets SHARED IMPORTED)
set_target_properties(react-native-worklets-core::rnworklets PROPERTIES
    IMPORTED_LOCATION "/Users/etech/Documents/madaitlab/doctimob/doctimob/node_modules/react-native-worklets-core/android/build/intermediates/cxx/Debug/2mz5l2c1/obj/x86_64/librnworklets.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/etech/Documents/madaitlab/doctimob/doctimob/node_modules/react-native-worklets-core/android/build/headers/rnworklets"
    INTERFACE_LINK_LIBRARIES ""
)
endif()


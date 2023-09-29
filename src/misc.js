<?xml version="1.0" encoding="utf-8"?>

<TextView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:id="@+id/signin"
    android:text="Sign in"
    android:textColor="@color/white"
    android:textSize="36dp"
    android:textStyle="bold"
    android:layout_margin="50dp"
    android:gravity="center"
    />

<EditText
android:id="@+id/username"
android:layout_width="match_parent"
android:layout_height="wrap_content"
android:layout_below="@id/signin"
android:background="#70ffffff"
android:hint="Username"
android:textColorHint="@color/white"
android:textColor="@color/white"
android:layout_margin="10dp"
android:padding="20dp"
android:drawableLeft="@drawable/ic_baseline_person_outline_24"
android:drawablePadding="20dp"/>

<EditText
android:id="@+id/password"
android:layout_width="match_parent"
android:layout_height="wrap_content"
android:layout_below="@id/username"
android:background="#70ffffff"
android:hint="password"
android:textColorHint="@color/white"
android:textColor="@color/white"
android:layout_margin="10dp"
android:padding="20dp"
android:drawableLeft="@drawable/ic_baseline_info_24"
android:drawablePadding="20dp"/>
<com.google.android.material.button.MaterialButton
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:id="@+id/loginbtn"
android:layout_below="@id/password"
android:text="LOGIN"
android:backgroundTint="@color/black"
android:layout_centerHorizontal="true"
android:layout_margin="20dp"
    />
<TextView
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:id="@+id/forgotpassword"
android:layout_below="@id/loginbtn"
android:text="Forgot Password ?"
android:textColor="@color/white"
android:layout_centerHorizontal="true"
android:layout_margin="20dp"/>
<TextView
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:id="@+id/other"
android:text="or sign in with"
android:layout_centerHorizontal="true"/>

<LinearLayout
android:layout_width="match_parent"
android:layout_height="wrap_parent"

<ImageView
android:layout_width="48dp"
android:layout_height="48dp"
android:layout_margin="20dp"
android:src="@dra"/>
/>
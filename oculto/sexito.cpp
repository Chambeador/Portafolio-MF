#include<bits/stdc++.h>
#define int long long
using namespace std;



void solve(){
    int n; cin>>n;
    vector<pair<int, int>> a(n);
    for(int i = 0; i < n; i++){
        int aa,bb; cin>>aa>>bb;
        a[i] = {aa,bb};
    }
    int l = 0, r = 1e15;
    int ans = 0;
    auto f = [&](int valor){
        for(int i = 0; i < n; i++){
            if(valor >= a[i].first){
                valor += a[i].second;                
            }else return 0;
        }
        return 1;
    };
    while(l <= r){
        int m = l + (r-l)/2;
        if(f(m)){
            ans = m;
            r = m-1;
        }else{
            l = m+1;
        }
    }
    cout<<ans<<endl;
}
signed main(){
       ios::sync_with_stdio(0);
       cin.tie(0); cout.tie(0);
       solve();
    
}
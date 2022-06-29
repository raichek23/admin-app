import { Component, OnInit } from '@angular/core';
import { Member } from "../member";
import { MemberService } from "../member.service";

// componentはデータの受け渡しのみ
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];

  // Dependency Injection=DI
  // constructorは自身のプロパティの初期化で使う
  constructor(
    private memberService: MemberService) { }

  // ライフサイクルメソッド
  // コンポーネントが初期化されるタイミングで実行される
  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
    .subscribe(members => this.members = members);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.memberService.addMember({ name } as Member)
      .subscribe(member => { this.members.push(member)});
  }

  delete(member: Member): void {
    this.members = this.members.filter(m => m !== member);
    this.memberService.deleteMember(member).subscribe();
  }
}

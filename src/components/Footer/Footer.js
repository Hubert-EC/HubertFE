import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Đăng ký thành viên độc quyền của chúng tôi để nhận tin tức và xu hướng mới nhất
        </FooterSubHeading>
        <FooterSubText>ĐĂNG KÝ NHẬN TIN MỚI.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email...' />
          <Button fontBig>Đăng ký</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Về Hubert</FooterLinkTitle>
            <FooterLink to='/'>Giới thiệu về Hubert</FooterLink>
            <FooterLink to='/'>Hồ sơ doanh nghiệp</FooterLink>
            <FooterLink to='/'>Tuyển dụng</FooterLink>
            <FooterLink to='/'>Hỏi đáp</FooterLink>
            <FooterLink to='/'>Liên hệ</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Thông tin dịch vụ</FooterLinkTitle>
            <FooterLink to='/'>Bảng giá</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Chính sách</FooterLinkTitle>
            <FooterLink to='/'>Chính sách bảo mật</FooterLink>
            <FooterLink to='/'>Điều khoản sử dụng</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            HUBERT
          </SocialLogo>
          <WebsiteRights>HUBERT © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank'aria-label='You tube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
